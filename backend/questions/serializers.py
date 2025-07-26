from rest_framework import serializers
from .models import Question, Choice

class QuestionDetailSerializer(serializers.ModelSerializer):
    options = serializers.SerializerMethodField()
    correctAnswer = serializers.SerializerMethodField()
    hint = serializers.SerializerMethodField()
    topic_name = serializers.CharField(source='topic.display_name', read_only=True)
    
    class Meta:
        model = Question
        fields = [
            'id', 'question_text', 'options', 'correctAnswer', 
            'hint', 'explanation', 'difficulty', 'topic_name'
        ]
    
    def get_options(self, obj):
        return [choice.choice_text for choice in obj.choices.all().order_by('choice_label')]
    
    def get_correctAnswer(self, obj):
        correct_choice = obj.choices.filter(is_correct=True).first()
        if correct_choice:
            return ord(correct_choice.choice_label) - ord('A')
        return 0
    
    def get_hint(self, obj):
        return obj.hints[0] if obj.hints else ""