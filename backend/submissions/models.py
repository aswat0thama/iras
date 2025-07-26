# Create your models here.
from django.db import models
from django.conf import settings
from questions.models import Question

class PracticeSession(models.Model):
    """A practice session containing multiple questions"""
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    topic = models.ForeignKey('curriculum.Topic', on_delete=models.CASCADE)
    
    # Session settings
    question_type = models.CharField(
        max_length=20,
        choices=[
            ('objective', 'Objective'),
            ('subjective', 'Subjective'),
            ('mixed', 'Mixed'),
        ]
    )
    difficulty = models.CharField(
        max_length=20,
        choices=[
            ('easy', 'Easy'),
            ('medium', 'Medium'),
            ('hard', 'Hard'),
        ]
    )
    
    # Session stats
    total_questions = models.PositiveIntegerField()
    answered_questions = models.PositiveIntegerField(default=0)
    correct_answers = models.PositiveIntegerField(default=0)
    total_points = models.PositiveIntegerField(default=0)
    
    # Timing
    time_started = models.DateTimeField(auto_now_add=True)
    time_completed = models.DateTimeField(blank=True, null=True)
    time_spent_seconds = models.PositiveIntegerField(default=0)
    
    # Status
    is_completed = models.BooleanField(default=False)
    
    def __str__(self):
        return f"{self.user.username} - {self.topic.display_name} Session"

class Answer(models.Model):
    """Student answers to questions"""
    session = models.ForeignKey(PracticeSession, on_delete=models.CASCADE, related_name='answers')
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    
    # Answer content
    answer_text = models.TextField(blank=True)  # Typed answer
    answer_image = models.ImageField(
        upload_to='uploads/submissions/',
        blank=True,
        null=True
    )  # Handwritten/photo answer
    selected_choice = models.CharField(max_length=5, blank=True)  # For MCQ (A, B, C, D)
    
    # Grading
    is_correct = models.BooleanField(default=False)
    points_earned = models.PositiveIntegerField(default=0)
    ai_feedback = models.TextField(blank=True)  # AI-generated feedback
    
    # Timing
    time_started = models.DateTimeField(auto_now_add=True)
    time_submitted = models.DateTimeField(blank=True, null=True)
    time_spent_seconds = models.PositiveIntegerField(default=0)
    
    # Status
    is_submitted = models.BooleanField(default=False)
    requires_manual_grading = models.BooleanField(default=False)
    
    def __str__(self):
        return f"{self.user.username} - {self.question.title[:30]}"