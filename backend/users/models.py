# Create your models here.
from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    """Custom User model for educational platform"""
    
    # Educational info matching your frontend
    grade = models.CharField(
        max_length=20,
        choices=[
            ('grade-10', 'Grade 10 (SEE Board)'),
            ('grade-11', 'Grade 11 (+2)'),
            ('grade-12', 'Grade 12 (+2)'),
        ],
        blank=True,
        null=True
    )
    
    # Profile info
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    profile_picture = models.ImageField(
        upload_to='uploads/profiles/',
        blank=True,
        null=True
    )
    
    # Preferences matching frontend
    preferred_language = models.CharField(
        max_length=10,
        choices=[('en', 'English'), ('ne', 'Nepali')],
        default='en'
    )
    
    # Gamification (for progress tracking)
    total_points = models.PositiveIntegerField(default=0)
    current_streak = models.PositiveIntegerField(default=0)
    longest_streak = models.PositiveIntegerField(default=0)
    
    # Learning preferences
    daily_goal_questions = models.PositiveIntegerField(default=10)
    
    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f"{self.username} ({self.get_grade_display() or 'No Grade'})"

class UserProfile(models.Model):
    """Extended profile information"""
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    bio = models.TextField(max_length=500, blank=True)
    school_name = models.CharField(max_length=200, blank=True)
    location = models.CharField(max_length=100, blank=True)
    
    # Learning preferences
    preferred_subjects = models.JSONField(default=list, blank=True)
    learning_style = models.CharField(
        max_length=20,
        choices=[
            ('visual', 'Visual Learner'),
            ('auditory', 'Auditory Learner'),
            ('kinesthetic', 'Kinesthetic Learner'),
            ('reading', 'Reading/Writing Learner'),
        ],
        blank=True
    )
    
    # Social features
    is_public_profile = models.BooleanField(default=False)
    allow_friend_requests = models.BooleanField(default=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f"{self.user.username}'s Profile"