# app/consumers.py
import json
from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer

from .models import Conversation, Messages
from . import serializers


class ChatConsumer(WebsocketConsumer):

    def fetch_messages(self, data):
        messages = Messages.last_20_messages()
        serializer = serializers.Messages(messages, many=True)
        serialized_messages = serializer.data

        print(serialized_messages)

    def new_message(self, data):
        print('new message executed')
        pass

    commands = {
        'fetch_messages': fetch_messages,
        'new_message': new_message
    }

    def connect(self):

        self.room_name = self.scope['url_route']['kwargs']['id']
        self.room_group_name = 'chat_%s' % self.room_name
        # Join room group

        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )
        self.accept()

    def disconnect(self, close_code):
        # Leave room group
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name,
            self.channel_name
        )

    def receive(self, text_data):
        data = json.loads(text_data)

        self.commands[data['text']['command']](self, data)

    def send_chat_message(self, message):
        # Send message to room group
        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,
            {
                'type': 'chat_message',
                'message': message,
            }
        )

    def chat_message(self, event):
        # Receive message from room group
        text = event['message']

        # Send message to WebSocket
        self.send(text_data=json.dumps({
            'text': text,
        }))
