from rest_framework import serializers
from .models import Conversation, Messages


class Conversation(serializers.ModelSerializer):
    class Meta:
        model = Conversation
        fields = '__all__'


class Messages(serializers.ModelSerializer):
    class Meta:
        model = Messages
        fields = '__all__'
