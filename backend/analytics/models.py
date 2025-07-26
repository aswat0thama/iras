# Create your models here.
from django.db import models
from django.conf import settings

class UserProgress(models.Model):
    """Track user progress across topics"""
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    topic = models.ForeignKey('curriculum.Topic', on_delete=models.CASCADE)
    
    # Progress metrics
    total_questions_attempted = models.PositiveIntegerField(default=0)
    total_questions_correct = models.PositiveIntegerField(default=0)
    accuracy_percentage = models.FloatField(default=0.0)
    
    # Status determination (matching your frontend)
    status = models.CharField(
        max_length=20,
        choices=[
            ('not-started', 'Not Started'),
            ('weak', 'Weak'),
            ('in-progress', 'In Progress'),
            ('completed', 'Completed'),
            ('mastered', 'Mastered'),
        ],
        default='not-started'
    )
    
    # Time tracking
    total_time_spent_seconds = models.PositiveIntegerField(default=0)
    last_practiced = models.DateTimeField(blank=True, null=True)
    
    # Streaks
    current_streak_days = models.PositiveIntegerField(default=0)
    longest_streak_days = models.PositiveIntegerField(default=0)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        unique_together = ['user', 'topic']
    
    def __str__(self):
        return f"{self.user.username} - {self.topic.display_name} ({self.status})"

class DailyStreak(models.Model):
    """Track daily login and practice streaks"""
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    date = models.DateField()
    
    # Activity tracking
    questions_answered = models.PositiveIntegerField(default=0)
    time_spent_seconds = models.PositiveIntegerField(default=0)
    topics_practiced = models.PositiveIntegerField(default=0)
    
    # Goals
    daily_goal_met = models.BooleanField(default=False)
    
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        unique_together = ['user', 'date']
        ordering = ['-date']
    
    def __str__(self):
        return f"{self.user.username} - {self.date}"

class WeakTopicRecommendation(models.Model):
    """AI-generated recommendations for weak topics"""
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    topic = models.ForeignKey('curriculum.Topic', on_delete=models.CASCADE)
    
    # Recommendation details
    weakness_score = models.FloatField()  # 0.0 to 1.0 (higher = weaker)
    recommended_questions_count = models.PositiveIntegerField()
    priority_level = models.CharField(
        max_length=20,
        choices=[
            ('low', 'Low'),
            ('medium', 'Medium'),
            ('high', 'High'),
            ('urgent', 'Urgent'),
        ]
    )
    
    # AI insights
    ai_analysis = models.TextField(blank=True)
    suggested_study_plan = models.JSONField(default=dict, blank=True)
    
    # Status
    is_active = models.BooleanField(default=True)
    is_dismissed = models.BooleanField(default=False)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        unique_together = ['user', 'topic']
        ordering = ['-weakness_score', '-created_at']
    
    def __str__(self):
        return f"{self.user.username} - Weak in {self.topic.display_name}"