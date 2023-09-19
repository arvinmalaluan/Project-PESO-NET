from rest_framework import generics

from . import models
from . import serializer


class GP_JobPost(generics.ListCreateAPIView):
    queryset = models.JobPost.objects.prefetch_related('profile')
    serializer_class = serializer.JobPostSerializer

    def get(self, request, *args, **kwargs):
        response = super().get(request, *args, **kwargs)
        for job_post in response.data:
            profile_id = job_post['profile']
            profile = models.RecruiterProfile.objects.get(pk=profile_id)
            job_post['recruiter_profile'] = serializer.RecruiterProfileSerializer(
                profile).data

        return response


class GP_RecruiterProfile(generics.ListCreateAPIView):
    queryset = models.RecruiterProfile.objects.all()
    serializer_class = serializer.RecruiterProfileSerializer


class U_RecruiterProfile(generics.RetrieveUpdateAPIView):
    queryset = models.RecruiterProfile.objects.all()
    serializer_class = serializer.RecruiterProfileSerializer


class UD_JobPost(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.JobPost.objects.prefetch_related('profile')
    serializer_class = serializer.JobPostSerializer

    def get(self, request, *args, **kwargs):
        response = super().get(request, *args, **kwargs)
        job_post = self.get_object()

        response.data['recruiter_profile'] = serializer.RecruiterProfileSerializer(
            job_post.profile).data

        return response
