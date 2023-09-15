from rest_framework import generics

from . import models
from . import serializer


class GP_JobPost(generics.ListCreateAPIView):
    queryset = models.JobPost.objects.all()
    serializer_class = serializer.JobPostSerializer


class GP_RecruiterProfile(generics.ListCreateAPIView):
    queryset = models.RecruiterProfile.objects.all()
    serializer_class = serializer.RecruiterProfileSerializer


class U_RecruiterProfile(generics.RetrieveUpdateAPIView):
    queryset = models.RecruiterProfile.objects.all()
    serializer_class = serializer.RecruiterProfileSerializer


class UD_JobPost(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.JobPost.objects.all()
    serializer_class = serializer.JobPostSerializer
