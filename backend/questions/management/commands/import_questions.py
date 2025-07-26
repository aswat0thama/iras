import json
from django.core.management.base import BaseCommand
from django.db import transaction
from questions.models import Question, Choice
from curriculum.models import Topic, Subject, Grade

class Command(BaseCommand):
    help = 'Import questions from JSON file'

    def add_arguments(self, parser):
        parser.add_argument('json_file', type=str, help='Path to JSON file')

    def handle(self, *args, **options):
        json_file = options['json_file']
        
        try:
            with open(json_file, 'r', encoding='utf-8') as file:
                data = json.load(file)
        except FileNotFoundError:
            self.stdout.write(
                self.style.ERROR(f'File {json_file} not found')
            )
            return
        
        # Get or create Grade 10
        grade, created = Grade.objects.get_or_create(
            name='grade-10',
            defaults={
                'display_name': 'Grade 10 (SEE Board)',
                'description': 'Secondary Education Examination',
                'total_students': 1250,
                'estimated_duration': '12 months',
                'difficulty_level': 'intermediate',
                'is_active': True,
                'order': 1
            }
        )
        
        # Get or create English subject
        subject, created = Subject.objects.get_or_create(
            name='english',
            grade=grade,
            defaults={
                'display_name': 'English Grammar',
                'description': 'English grammar topics and exercises',
                'color_code': '#F59E0B',
                'icon_name': 'BookOpen',
                'total_topics': 0,
                'total_questions': 0,
                'estimated_time': '40 hrs',
                'difficulty_level': 'medium',
                'is_active': True,
                'order': 4
            }
        )

        topics_created = 0
        questions_created = 0

        with transaction.atomic():
            for item in data:
                fields = item['fields']
                
                # Get or create topic
                topic_name = fields['topic'].lower().replace(' ', '-').replace('_', '-')
                topic, topic_created = Topic.objects.get_or_create(
                    name=topic_name,
                    subject=subject,
                    defaults={
                        'display_name': fields['topic'],
                        'description': f'{fields["topic"]} questions and exercises',
                        'difficulty_level': fields['difficulty'],
                        'estimated_time_minutes': 30,
                        'total_questions': 0,
                        'order': 1,
                        'is_active': True
                    }
                )
                
                if topic_created:
                    topics_created += 1
                
                # Create question
                question = Question.objects.create(
                    title=f"{fields['topic']} - Question",
                    question_text=fields['question_text'],
                    question_type='objective',
                    difficulty=fields['difficulty'],
                    topic=topic,
                    correct_answer=fields['correct_answer'],
                    explanation=fields['explanation'],
                    hints=[fields['hint']] if fields.get('hint') else [],
                    points=1,
                    time_limit_seconds=60,
                    is_active=True
                )
                
                # Create choices
                choices_data = [
                    {'label': 'A', 'text': fields['option_a']},
                    {'label': 'B', 'text': fields['option_b']},
                    {'label': 'C', 'text': fields['option_c']},
                    {'label': 'D', 'text': fields['option_d']},
                ]
                
                for choice_data in choices_data:
                    Choice.objects.create(
                        question=question,
                        choice_text=choice_data['text'],
                        choice_label=choice_data['label'],
                        is_correct=(choice_data['label'] == fields['correct_answer'])
                    )
                
                questions_created += 1
        
        # Update topic question counts
        for topic in Topic.objects.filter(subject=subject):
            topic.total_questions = topic.questions.count()
            topic.save()
        
        # Update subject question counts
        subject.total_questions = Question.objects.filter(topic__subject=subject).count()
        subject.total_topics = subject.topics.count()
        subject.save()
        
        self.stdout.write(
            self.style.SUCCESS(
                f'Successfully imported {questions_created} questions and {topics_created} topics'
            )
        )