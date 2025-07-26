from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.http import JsonResponse

def api_root(request):
    return JsonResponse({
        'message': 'Educational Platform API',
        'version': '1.0',
        'status': 'running',
        'endpoints': {
            'curriculum': '/api/curriculum/',
            'auth': '/api/auth/',
            'questions': '/api/questions/',
            'submissions': '/api/submissions/',
            'analytics': '/api/analytics/',
        }
    })

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', api_root, name='api-root'),
    
    # Add curriculum API
    path('api/curriculum/', include('curriculum.urls')),
    path('api/questions/', include('questions.urls')),
]

# Serve media files in development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)