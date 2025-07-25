from rest_framework.views import APIView
from rest_framework.response import Response
from quizzes.models import Quiz
from flashcards.models import Flashcard
from courses.models import Course
from rest_framework import viewsets
from rest_framework.response import Response

class CoreViewSet(viewsets.ViewSet):
    def list(self, request):
        return Response({"message": "Core API root"})
class DashboardView(APIView):
    def get(self, request):
        return Response({
            "quiz_count": Quiz.objects.count(),
            "flashcard_count": Flashcard.objects.count(),
            "course_count": Course.objects.count(),
        })
        