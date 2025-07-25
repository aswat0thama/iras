# from django.contrib import admin
# from django.urls import path, include
# from core.views import DashboardView

# urlpatterns = [
#     path('admin/', admin.site.urls),
#     path('api/', include('core.urls')),
#     path('dashboard/', DashboardView.as_view()),  
# ]

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CoreViewSet

router = DefaultRouter()
router.register(r'', CoreViewSet, basename='core')

urlpatterns = [
    path('', include(router.urls)),
]



