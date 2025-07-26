from rest_framework import serializers
from .models import PracticeSession, Answer
from questions.serializers import QuestionDetailSerializer

class AnswerSubmissionSerializer(serializers.ModelSerializer):
    """Serializer for submitting answers"""
    
    class Meta:
        model = Answer
        fields = [
            'question', 'answer_text', 'answer_image',
            'selected_choice', 'time_spent_seconds'
        ]
    
    def create(self, validated_data):
        """Create answer and update session progress"""
        user = self.context['request'].user
        session = self.context['session']
        
        answer = Answer.objects.create(
            user=user,
            session=session,
            is_submitted=True,
            time_submitted=timezone.now(),
            **validated_data
        )
        
        # Auto-grade objective questions
        if answer.question.question_type == 'objective':
            self._grade_objective_answer(answer)
        
        # Update session progress
        session.answered_questions += 1
        if answer.is_correct:
            session.correct_answers += 1
            session.total_points += answer.points_earned
        session.save()
        
        return answer
    
    def _grade_objective_answer(self, answer):
        """Auto-grade objective questions"""
        if answer.selected_choice and answer.question.correct_answer:
            if answer.selected_choice.upper() == answer.question.correct_answer.upper():
                answer.is_correct = True
                answer.points_earned = answer.question.points
            else:
                answer.is_correct = False
                answer.points_earned = 0
            answer.save()

class AnswerSerializer(serializers.ModelSerializer):
    """Serializer for answer details"""
    question = QuestionDetailSerializer(read_only=True)
    
    class Meta:
        model = Answer
        fields = [
            'id', 'question', 'answer_text', 'answer_image',
            'selected_choice', 'is_correct', 'points_earned',
            'ai_feedback', 'time_spent_seconds', 'time_submitted'
        ]

class PracticeSessionCreateSerializer(serializers.ModelSerializer):
    """Serializer for creating practice sessions"""
    
    class Meta:
        model = PracticeSession
        fields = [
            'topic', 'question_type', 'difficulty', 'total_questions'
        ]
    
    def create(self, validated_data):
        """Create practice session with selected questions"""
        user = self.context['request'].user
        
        session = PracticeSession.objects.create(
            user=user,
            **validated_data
        )
        
        return session

class PracticeSessionSerializer(serializers.ModelSerializer):
    """Serializer for practice session details"""
    topic_name = serializers.CharField(source='topic.display_name', read_only=True)
    subject_name = serializers.CharField(source='topic.subject.display_name', read_only=True)
    accuracy_percentage = serializers.SerializerMethodField()
    
    class Meta:
        model = PracticeSession
        fields = [
            'id', 'topic_name', 'subject_name', 'question_type',
            'difficulty', 'total_questions', 'answered_questions',
            'correct_answers', 'total_points', 'accuracy_percentage',
            'time_started', 'time_completed', 'time_spent_seconds',
            'is_completed'
        ]
    
    def get_accuracy_percentage(self, obj):
        """Calculate accuracy percentage"""
        if obj.answered_questions == 0:
            return 0
        return round((obj.correct_answers / obj.answered_questions) * 100, 1)

class PracticeSessionDetailSerializer(serializers.ModelSerializer):
    """Detailed session with answers"""
    answers = AnswerSerializer(many=True, read_only=True)
    topic_name = serializers.CharField(source='topic.display_name', read_only=True)
    
    class Meta:
        model = PracticeSession
        fields = [
            'id', 'topic_name', 'question_type', 'difficulty',
            'total_questions', 'answered_questions', 'correct_answers',
            'total_points', 'time_started', 'time_completed',
            'time_spent_seconds', 'is_completed', 'answers'
        ]