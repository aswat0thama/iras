from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.db.models import Q
from .models import Question
from .serializers import QuestionDetailSerializer

class QuestionViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Question.objects.filter(is_active=True)
    serializer_class = QuestionDetailSerializer
    permission_classes = []
    
    def get_queryset(self):
        queryset = super().get_queryset()
        
        topic_id = self.request.query_params.get('topic', None)
        if topic_id:
            queryset = queryset.filter(topic_id=topic_id)
        
        difficulty = self.request.query_params.get('difficulty', None)
        if difficulty in ['easy', 'medium', 'hard']:
            queryset = queryset.filter(difficulty=difficulty)
        
        return queryset.order_by('?')
    
    @action(detail=False, methods=['get'])
    def practice_set(self, request):
        topic_id = request.query_params.get('topic')
        difficulty = request.query_params.get('difficulty', 'easy')
        count = int(request.query_params.get('count', 10))
        
        if not topic_id:
            return Response({
                'success': False,
                'message': 'Topic ID is required'
            }, status=status.HTTP_400_BAD_REQUEST)
        
        questions = Question.objects.filter(
            topic_id=topic_id,
            difficulty=difficulty,
            is_active=True
        ).order_by('?')[:count]
        
        if not questions.exists():
            return Response({
                'success': False,
                'message': 'No questions found'
            }, status=status.HTTP_404_NOT_FOUND)
        
        serializer = QuestionDetailSerializer(questions, many=True)
        
        return Response({
            'success': True,
            'data': {
                'questions': serializer.data,
                'total_questions': len(serializer.data)
            },
            'message': 'Practice set created successfully'
        })