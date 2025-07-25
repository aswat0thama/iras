# from django.db import models

# class Flashcard(models.Model):
#     title = models.CharField(max_length=100)
#     description = models.TextField(blank=True)

#     def __str__(self):
#         return self.title
    
from django.db import models

class Flashcard(models.Model):
    question = models.CharField(max_length=255)
    answer = models.TextField()

    def __str__(self):
        return self.question
   
    