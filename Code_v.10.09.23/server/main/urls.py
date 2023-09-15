
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('general/', include('userFolder.urls')),
    path('seeker/', include('seekerFolder.urls')),
    path('jobrecru/', include('recruiter.urls')),
    path('admin/', include('adminpage.urls'))
]
