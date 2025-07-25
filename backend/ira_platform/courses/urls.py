from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import CourseViewSet

router = DefaultRouter()
router.register(r'courses',CourseViewSet )

urlpatterns = [
    path('', include(router.urls)),
]