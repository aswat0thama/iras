from rest_framework import serializers
from .models import UserProgress, DailyStreak, WeakTopicRecommendation

class UserProgressSerializer(serializers.ModelSerializer):
    """Serializer for user progress tracking"""
    topic_name = serializers.CharField(source='topic.display_name', read_only=True)
    subject_name = serializers.CharField(source='topic.subject.display_name', read_only=True)
    
    class Meta:
        model = UserProgress
        fields = [
            'topic_name', 'subject_name', 'total_questions_attempted',
            'total_questions_correct', 'accuracy_percentage', 'status',
            'total_time_spent_seconds', 'last_practiced',
            'current_streak_days', 'longest_streak_days'
        ]

class DailyStreakSerializer(serializers.ModelSerializer):
    """Serializer for daily activity tracking"""
    
    class Meta:
        model = DailyStreak
        fields = [
            'date', 'questions_answered', 'time_spent_seconds',
            'topics_practiced', 'daily_goal_met'
        ]

class WeakTopicRecommendationSerializer(serializers.ModelSerializer):
    """Serializer for AI recommendations"""
    topic_name = serializers.CharField(source='topic.display_name', read_only=True)
    subject_name = serializers.CharField(source='topic.subject.display_name', read_only=True)
    
    class Meta:
        model = WeakTopicRecommendation
        fields = [
            'topic_name', 'subject_name', 'weakness_score',
            'recommended_questions_count', 'priority_level',
            'ai_analysis', 'suggested_study_plan'
        ]

class UserAnalyticsSerializer(serializers.Serializer):
    """Combined analytics data for dashboard"""
    overall_progress = serializers.DictField()
    subject_progress = serializers.ListField()
    weak_topics = WeakTopicRecommendationSerializer(many=True)
    recent_activity = DailyStreakSerializer(many=True)
    streaks = serializers.DictField()
    
    def to_representation(self, instance):
        """Custom representation for analytics dashboard"""
        user = instance
        
        # Calculate overall progress
        from curriculum.models import Topic
        from django.db.models import Avg
        
        user_progress = UserProgress.objects.filter(user=user)
        overall_accuracy = user_progress.aggregate(
            avg_accuracy=Avg('accuracy_percentage')
        )['avg_accuracy'] or 0
        
        total_questions = user_progress.aggregate(
            total=sum('total_questions_attempted')
        )['total'] or 0
        
        # Get subject-wise progress
        subject_progress = []
        from curriculum.models import Subject
        for subject in Subject.objects.filter(is_active=True):
            topics = subject.topics.all()
            if topics:
                subject_data = {
                    'name': subject.display_name,
                    'progress': 0,
                    'topics_completed': 0,
                    'total_topics': topics.count()
                }
                
                topic_progress = user_progress.filter(topic__in=topics)
                if topic_progress:
                    subject_data['progress'] = round(
                        topic_progress.aggregate(Avg('accuracy_percentage'))['accuracy_percentage__avg'] or 0,
                        1
                    )
                    subject_data['topics_completed'] = topic_progress.filter(
                        status__in=['completed', 'mastered']
                    ).count()
                
                subject_progress.append(subject_data)
        
        # Get weak topics
        weak_topics = WeakTopicRecommendation.objects.filter(
            user=user, is_active=True
        ).order_by('-weakness_score')[:5]
        
        # Get recent activity
        recent_activity = DailyStreak.objects.filter(user=user).order_by('-date')[:7]
        
        return {
            'overall_progress': {
                'accuracy': round(overall_accuracy, 1),
                'total_questions': total_questions,
                'points': user.total_points
            },
            'subject_progress': subject_progress,
            'weak_topics': WeakTopicRecommendationSerializer(weak_topics, many=True).data,
            'recent_activity': DailyStreakSerializer(recent_activity, many=True).data,
            'streaks': {
                'current': user.current_streak,
                'longest': user.longest_streak
            }
        }