from django.urls import path

from . import views

urlpatterns = [
    # Get and Post links
    path('jobpost', views.GP_JobPost.as_view()),
    path('recru-profile', views.GP_RecruiterProfile.as_view()),

    # Update
    path('recru-profile/<int:pk>', views.U_RecruiterProfile.as_view()),

    # Update and Delete
    path('jobpost/<int:pk>', views.UD_JobPost.as_view())
]
