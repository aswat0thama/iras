# Create your models here.
from django.db import models
from curriculum.models import Topic

class Question(models.Model):
    """Questions for practice sessions"""
    
    QUESTION_TYPES = [
        ('objective', 'Objective (MCQ)'),
        ('subjective', 'Subjective (Open-ended)'),
    ]
    
    DIFFICULTY_LEVELS = [
        ('easy', 'Easy'),
        ('medium', 'Medium'),
        ('hard', 'Hard'),
    ]
    
    # Basic info
    title = models.CharField(max_length=500)
    question_text = models.TextField()
    question_type = models.CharField(max_length=20, choices=QUESTION_TYPES)
    difficulty = models.CharField(max_length=20, choices=DIFFICULTY_LEVELS)
    
    # Relationships
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE, related_name='questions')
    
    # Question content
    question_image = models.ImageField(upload_to='uploads/questions/', blank=True, null=True)
    explanation = models.TextField(blank=True)
    hints = models.JSONField(default=list, blank=True)  # Array of hint strings
    
    # Correct answer (for objective questions)
    correct_answer = models.TextField(blank=True)
    
    # Points and timing
    points = models.PositiveIntegerField(default=1)
    time_limit_seconds = models.PositiveIntegerField(default=120)  # 2 minutes default
    
    # Status
    is_active = models.BooleanField(default=True)
    
    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['topic__order', 'difficulty', 'created_at']
    
    def __str__(self):
        return f"{self.topic.display_name} - {self.title[:50]}"

class Choice(models.Model):
    """Multiple choice options for objective questions"""
    question = models.ForeignKey(Question, on_delete=models.CASCADE, related_name='choices')
    choice_text = models.CharField(max_length=500)
    choice_label = models.CharField(max_length=5)  # A, B, C, D
    is_correct = models.BooleanField(default=False)
    
    class Meta:
        ordering = ['choice_label']
    
    def __str__(self):
        return f"{self.choice_label}: {self.choice_text[:30]}"

class QuestionBank(models.Model):
    """Groups of questions for practice sessions"""
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE, related_name='question_banks')
    questions = models.ManyToManyField(Question, related_name='question_banks')
    
    # Session config
    total_questions = models.PositiveIntegerField(default=10)
    time_limit_minutes = models.PositiveIntegerField(default=30)
    
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.topic.display_name} - {self.name}"