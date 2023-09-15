from django.urls import path
from . import views

urlpatterns = [
    path('login', views.login, name='authenticate'),
    path('register', views.register, name='register'),
    path('update-password', views.update_user_info, name='changepass'),
]