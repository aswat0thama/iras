# from rest_framework.routers import DefaultRouter
# from django.urls import path, include
# from .views import FlashcardViewSet

# router = DefaultRouter()
# router.register(r'flashcards', FlashcardViewSet)

# urlpatterns = [
#     path('', include(router.urls)),
# ]

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FlashcardViewSet

router = DefaultRouter()
router.register(r'', FlashcardViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
