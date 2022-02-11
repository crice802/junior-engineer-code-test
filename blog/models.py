from django.db import models
from django.utils import timezone

def auto_now():
    # update from naive date to using USE_TZ in /web/setting.py
    return timezone.now() - timezone.timedelta(days=1)

class Post(models.Model):
    title = models.CharField(max_length=128)
    text = models.TextField(max_length=2048)
    posted_by = models.CharField(max_length=50, default="root")
    posted_at = models.DateTimeField(auto_now=True)
    edited_at = models.DateTimeField(auto_now=True)
    # add new item to model to count views 
    views = models.IntegerField(default=0)

    def __str__(self):
        return self.title
