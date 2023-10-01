from django.db import models

from seekerFolder.models import Account


class Conversation(models.Model):
    involve_one = models.ForeignKey(
        Account, on_delete=models.CASCADE, related_name='conversations_one')
    involve_two = models.ForeignKey(
        Account, on_delete=models.CASCADE, related_name='conversations_two')
    custom_key = models.CharField(max_length=20, blank=True)

    def save(self, *args, **kwargs):
        val = ''

        if (self.involve_one.id > self.involve_two.id):
            val = f"{self.involve_one.id}{self.involve_two.id}"
        else:
            val = f"{self.involve_two.id}{self.involve_one.id}"

        self.custom_key = val
        super().save(*args, **kwargs)


class Messages(models.Model):
    conversation = models.ForeignKey(Conversation, on_delete=models.CASCADE)
    custom_key = models.CharField(max_length=20)
    message_content = models.TextField()
    message_created = models.DateTimeField(auto_now_add=True)

    @classmethod
    def last_20_messages(self):
        return Messages.objects.order_by('-message_created').all()[:20]
