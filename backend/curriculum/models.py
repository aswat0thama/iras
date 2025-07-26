# Create your models here.
from django.db import models

class Grade(models.Model):
    """Grade levels matching your frontend courses"""
    name = models.CharField(max_length=50, unique=True)  # 'grade-10', 'grade-11', etc.
    display_name = models.CharField(max_length=100)  # 'Grade 10 (SEE Board)'
    description = models.TextField(blank=True)
    
    # Metadata
    is_active = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0)
    
    # Stats for frontend display
    total_students = models.PositiveIntegerField(default=0)
    estimated_duration = models.CharField(max_length=50, default='12 months')
    difficulty_level = models.CharField(
        max_length=20,
        choices=[
            ('beginner', 'Beginner'),
            ('intermediate', 'Intermediate'),
            ('advanced', 'Advanced'),
        ],
        default='intermediate'
    )
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['order', 'name']
    
    def __str__(self):
        return self.display_name

class Subject(models.Model):
    """Subjects within each grade"""
    name = models.CharField(max_length=100)  # 'mathematics', 'science', etc.
    display_name = models.CharField(max_length=150)  # 'Mathematics', 'Science'
    description = models.TextField(blank=True)
    grade = models.ForeignKey(Grade, on_delete=models.CASCADE, related_name='subjects')
    
    # UI theming (matching your frontend)
    color_code = models.CharField(max_length=7, default='#3B82F6')  # Hex color
    icon_name = models.CharField(max_length=50, blank=True)  # 'Calculator', 'Microscope'
    
    # Stats
    total_topics = models.PositiveIntegerField(default=0)
    total_questions = models.PositiveIntegerField(default=0)
    estimated_time = models.CharField(max_length=20, default='40 hrs')
    difficulty_level = models.CharField(
        max_length=20,
        choices=[
            ('easy', 'Easy'),
            ('medium', 'Medium'),
            ('hard', 'Hard'),
        ],
        default='medium'
    )
    
    # Ordering
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['grade__order', 'order', 'name']
        unique_together = ['name', 'grade']
    
    def __str__(self):
        return f"{self.grade.display_name} - {self.display_name}"

class Topic(models.Model):
    """Topics within each subject (for concept map navigation)"""
    name = models.CharField(max_length=200)
    display_name = models.CharField(max_length=250)
    description = models.TextField(blank=True)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE, related_name='topics')
    
    # Progress tracking fields
    difficulty_level = models.CharField(
        max_length=20,
        choices=[
            ('easy', 'Easy'),
            ('medium', 'Medium'),
            ('hard', 'Hard'),
        ],
        default='medium'
    )
    
    estimated_time_minutes = models.PositiveIntegerField(default=30)
    total_questions = models.PositiveIntegerField(default=0)
    
    # Concept map positioning (for interactive maps)
    map_position_x = models.FloatField(default=0)
    map_position_y = models.FloatField(default=0)
    
    # Prerequisites (other topics that should be completed first)
    prerequisites = models.ManyToManyField(
        'self',
        blank=True,
        symmetrical=False,
        related_name='unlocks'
    )
    
    # Ordering and status
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['subject__order', 'order']
        unique_together = ['name', 'subject']
    
    def __str__(self):
        return f"{self.subject.display_name} - {self.display_name}"