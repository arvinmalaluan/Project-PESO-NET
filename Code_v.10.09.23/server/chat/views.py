from rest_framework import generics
from . import models
from . import serializers


class Conversation(generics.ListCreateAPIView):
    queryset = models.Conversation.objects.all()
    serializer_class = serializers.Conversation
