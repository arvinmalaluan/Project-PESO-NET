from django.urls import path
from .consumers import *

websocket_urlpatterns = [
    path('getnumber/<int:id>', ChatConsumer.as_asgi()),
]
