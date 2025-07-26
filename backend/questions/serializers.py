from rest_framework import serializers
from .models import Question, Choice, QuestionBank

class ChoiceSerializer(serializers.ModelSerializer):
    """Serializer for multiple choice options"""
    
    class Meta:
        model = Choice
        fields = ['choice_label', 'choice_text']

class QuestionListSerializer(serializers.ModelSerializer):
    """Simplified serializer for question listings"""
    topic_name = serializers.CharField(source='topic.display_name', read_only=True)
    
    class Meta:
        model = Question
        fields = [
            'id', 'title', 'question_type', 'difficulty',
            'points', 'time_limit_seconds', 'topic_name'
        ]

class QuestionDetailSerializer(serializers.ModelSerializer):
    """Detailed serializer for practice sessions"""
    choices = ChoiceSerializer(many=True, read_only=True)
    topic_name = serializers.CharField(source='topic.display_name', read_only=True)
    subject_name = serializers.CharField(source='topic.subject.display_name', read_only=True)
    
    class Meta:
        model = Question
        fields = [
            'id', 'title', 'question_text', 'question_type',
            'difficulty', 'question_image', 'choices', 'hints',
            'points', 'time_limit_seconds', 'topic_name', 'subject_name'
        ]

class QuestionWithAnswerSerializer(serializers.ModelSerializer):
    """Serializer that includes correct answer (for results)"""
    choices = ChoiceSerializer(many=True, read_only=True)
    topic_name = serializers.CharField(source='topic.display_name', read_only=True)
    
    class Meta:
        model = Question
        fields = [
            'id', 'title', 'question_text', 'question_type',
            'difficulty', 'question_image', 'choices', 'correct_answer',
            'explanation', 'hints', 'points', 'topic_name'
        ]

class QuestionBankSerializer(serializers.ModelSerializer):
    """Serializer for question banks/practice sets"""
    topic_name = serializers.CharField(source='topic.display_name', read_only=True)
    questions_count = serializers.SerializerMethodField()
    
    class Meta:
        model = QuestionBank
        fields = [
            'id', 'name', 'description', 'topic_name',
            'total_questions', 'time_limit_minutes', 'questions_count'
        ]
    
    def get_questions_count(self, obj):
        """Get actual questions count"""
        return obj.questions.filter(is_active=True).count()