from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import GradeViewSet, SubjectViewSet, TopicViewSet

router = DefaultRouter()
router.register(r'grades', GradeViewSet)
router.register(r'subjects', SubjectViewSet)
router.register(r'topics', TopicViewSet)

urlpatterns = [
    path('', include(router.urls)),
]