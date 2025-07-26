from django.contrib import admin

# Register your models here.
from curriculum.models import Grade, Subject, Topic
@admin.register(Grade)
class GradeAdmin(admin.ModelAdmin):
    list_display = ('name', 'order', 'is_active')
    search_fields = ('name',)
    ordering = ('order',)
