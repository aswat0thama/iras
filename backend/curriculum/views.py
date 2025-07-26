from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Grade, Subject, Topic
from .serializers import GradeSerializer, GradeListSerializer, SubjectSerializer, TopicSerializer

class GradeViewSet(viewsets.ReadOnlyModelViewSet):
    """API endpoints for grades/courses"""
    queryset = Grade.objects.filter(is_active=True).order_by('order')
    permission_classes = []  # Add this line
    
    def get_serializer_class(self):
        if self.action == 'list':
            return GradeListSerializer
        return GradeSerializer
    
    def list(self, request):
        """GET /api/curriculum/grades/ - List all grades for course selection"""
        grades = self.get_queryset()
        serializer = self.get_serializer(grades, many=True)
        return Response({
            'success': True,
            'data': serializer.data,
            'message': 'Grades retrieved successfully'
        })
    
    def retrieve(self, request, pk=None):
        """GET /api/curriculum/grades/{id}/ - Get specific grade with subjects"""
        try:
            grade = self.get_object()
            serializer = self.get_serializer(grade)
            return Response({
                'success': True,
                'data': serializer.data,
                'message': 'Grade details retrieved successfully'
            })
        except Grade.DoesNotExist:
            return Response({
                'success': False,
                'message': 'Grade not found'
            }, status=status.HTTP_404_NOT_FOUND)

class SubjectViewSet(viewsets.ReadOnlyModelViewSet):
    """API endpoints for subjects"""
    queryset = Subject.objects.filter(is_active=True)
    serializer_class = SubjectSerializer
    permission_classes = []  # Add this line
    
    def get_queryset(self):
        """Filter subjects by grade if specified"""
        queryset = super().get_queryset()
        grade_id = self.request.query_params.get('grade', None)
        if grade_id:
            queryset = queryset.filter(grade_id=grade_id)
        return queryset.order_by('order')
    
    @action(detail=True, methods=['get'])
    def topics(self, request, pk=None):
        """GET /api/curriculum/subjects/{id}/topics/ - Get topics for concept map"""
        subject = self.get_object()
        topics = subject.topics.filter(is_active=True).order_by('order')
        serializer = TopicSerializer(topics, many=True)
        return Response({
            'success': True,
            'data': serializer.data,
            'subject': {
                'id': subject.id,
                'name': subject.display_name,
                'color': subject.color_code
            },
            'message': 'Topics retrieved successfully'
        })

class TopicViewSet(viewsets.ReadOnlyModelViewSet):
    """API endpoints for topics"""
    queryset = Topic.objects.filter(is_active=True)
    serializer_class = TopicSerializer
    permission_classes = []
    
    def get_queryset(self):
        """Filter topics by subject if specified"""
        queryset = super().get_queryset()
        subject_id = self.request.query_params.get('subject', None)
        if subject_id:
            queryset = queryset.filter(subject_id=subject_id)
        return queryset.order_by('order')
    
    @action(detail=True, methods=['get'])
    def practice_options(self, request, pk=None):
        """GET /api/curriculum/topics/{id}/practice-options/ - Get practice session options"""
        topic = self.get_object()
        
        # Count questions by type and difficulty
        from questions.models import Question
        questions = Question.objects.filter(topic=topic, is_active=True)
        
        question_stats = {
            'total': questions.count(),
            'by_type': {
                'objective': questions.filter(question_type='objective').count(),
                'subjective': questions.filter(question_type='subjective').count(),
            },
            'by_difficulty': {
                'easy': questions.filter(difficulty='easy').count(),
                'medium': questions.filter(difficulty='medium').count(),
                'hard': questions.filter(difficulty='hard').count(),
            }
        }
        
        return Response({
            'success': True,
            'data': {
                'topic': TopicSerializer(topic).data,
                'question_stats': question_stats,
                'available_options': {
                    'types': ['objective', 'subjective', 'mixed'],
                    'difficulties': ['easy', 'medium', 'hard'],
                    'question_counts': [5, 10, 15, 20, 25]
                }
            },
            'message': 'Practice options retrieved successfully'
        })
