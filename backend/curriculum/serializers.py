from rest_framework import serializers
from .models import Grade, Subject, Topic

class TopicSerializer(serializers.ModelSerializer):
    """Serializer for topics (for concept maps)"""
    
    class Meta:
        model = Topic
        fields = [
            'id', 'name', 'display_name', 'description',
            'difficulty_level', 'estimated_time_minutes',
            'total_questions', 'map_position_x', 'map_position_y',
            'order', 'is_active'
        ]

class TopicProgressSerializer(serializers.ModelSerializer):
    """Topic with progress information"""
    progress = serializers.SerializerMethodField()
    status = serializers.SerializerMethodField()
    completed_questions = serializers.SerializerMethodField()
    
    class Meta:
        model = Topic
        fields = [
            'id', 'name', 'display_name', 'description',
            'difficulty_level', 'total_questions', 'progress',
            'status', 'completed_questions', 'estimated_time_minutes'
        ]
    
    def get_progress(self, obj):
        """Calculate progress percentage for current user"""
        user = self.context.get('user')
        if not user or not user.is_authenticated:
            return 0
        
        # Get user progress from analytics app
        try:
            from analytics.models import UserProgress
            progress = UserProgress.objects.get(user=user, topic=obj)
            return round(progress.accuracy_percentage, 1)
        except:
            return 0
    
    def get_status(self, obj):
        """Get status for current user"""
        user = self.context.get('user')
        if not user or not user.is_authenticated:
            return 'not-started'
        
        try:
            from analytics.models import UserProgress
            progress = UserProgress.objects.get(user=user, topic=obj)
            return progress.status
        except:
            return 'not-started'
    
    def get_completed_questions(self, obj):
        """Get completed questions count"""
        user = self.context.get('user')
        if not user or not user.is_authenticated:
            return 0
        
        try:
            from analytics.models import UserProgress
            progress = UserProgress.objects.get(user=user, topic=obj)
            return progress.total_questions_correct
        except:
            return 0

class SubjectSerializer(serializers.ModelSerializer):
    """Serializer for subjects"""
    topics = TopicSerializer(many=True, read_only=True)
    
    class Meta:
        model = Subject
        fields = [
            'id', 'name', 'display_name', 'description',
            'color_code', 'icon_name', 'total_topics',
            'total_questions', 'estimated_time', 'difficulty_level',
            'topics'
        ]

class SubjectProgressSerializer(serializers.ModelSerializer):
    """Subject with progress information"""
    topics = TopicProgressSerializer(many=True, read_only=True, context={'user': None})
    progress = serializers.SerializerMethodField()
    
    class Meta:
        model = Subject
        fields = [
            'id', 'name', 'display_name', 'description',
            'color_code', 'icon_name', 'total_topics',
            'total_questions', 'estimated_time', 'difficulty_level',
            'progress', 'topics'
        ]
    
    def get_progress(self, obj):
        """Calculate overall subject progress"""
        user = self.context.get('user')
        if not user or not user.is_authenticated:
            return 0
        
        topics = obj.topics.all()
        if not topics:
            return 0
        
        total_progress = 0
        for topic in topics:
            try:
                from analytics.models import UserProgress
                progress = UserProgress.objects.get(user=user, topic=topic)
                total_progress += progress.accuracy_percentage
            except:
                total_progress += 0
        
        return round(total_progress / len(topics), 1) if topics else 0

class GradeSerializer(serializers.ModelSerializer):
    """Serializer for grades/courses"""
    subjects = SubjectSerializer(many=True, read_only=True)
    
    class Meta:
        model = Grade
        fields = [
            'id', 'name', 'display_name', 'description',
            'total_students', 'estimated_duration', 'difficulty_level',
            'subjects'
        ]

class GradeListSerializer(serializers.ModelSerializer):
    """Simplified serializer for grade listing"""
    
    class Meta:
        model = Grade
        fields = [
            'id', 'name', 'display_name', 'description',
            'total_students', 'estimated_duration', 'difficulty_level'
        ]