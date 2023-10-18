from rest_framework import generics
from django.shortcuts import get_object_or_404

from . import models
from . import serializer
from seekerFolder import serializers
from seekerFolder.models import AllProfile


class GP_JobPost(generics.ListCreateAPIView):
    queryset = models.JobPost.objects.prefetch_related('allprofile')
    serializer_class = serializer.JPSerializer

    def get(self, request, *args, **kwargs):
        profile_id = request.query_params.get('allprofile')
        self.queryset = self.queryset.filter(allprofile=profile_id)
        response = super().get(request, *args, **kwargs)

        for job_post in response.data:
            profile_id = job_post['allprofile']
            profile = AllProfile.objects.get(account=profile_id)
            job_post['recruiter_profile'] = serializers.ProfileSerializer(
                profile).data

        return response


class GP_RecruiterProfile(generics.ListCreateAPIView):
    queryset = models.RecruiterProfile.objects.all()
    serializer_class = serializer.RecruiterProfileSerializer


class U_RecruiterProfile(generics.RetrieveUpdateAPIView):
    queryset = models.RecruiterProfile.objects.all()
    serializer_class = serializer.RecruiterProfileSerializer


class UD_JobPost(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.JobPost.objects.all()
    serializer_class = serializer.JobPostSerializer

    # def get(self, request, *args, **kwargs):
    #     response = super().get(request, *args, **kwargs)
    #     job_post = self.get_object()

    #     response.data['recruiter_profile'] = serializers.ProfileSerializer(
    #         job_post.allprofile).data

    #     return response


class GA_JobPost(generics.ListCreateAPIView):
    queryset = models.JobPost.objects.all()
    serializer_class = serializer.JobPostSerializer


class C_Apply(generics.ListCreateAPIView):
    queryset = models.Applicants.objects.all()
    serializer_class = serializer.ApplicantSerializer


class UD_Apply(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Applicants.objects.all()
    serializer_class = serializer.ApplicantSerializer

    def get_object(self):
        custom_key = self.kwargs['custom_key']
        return get_object_or_404(models.Applicants, custom_key=custom_key)


class GA_JobPostWApplicants(generics.ListCreateAPIView):
    serializer_class = serializer.JPSerializer

    def get_queryset(self):
        return models.JobPost.objects.prefetch_related('applicants').order_by('created')
