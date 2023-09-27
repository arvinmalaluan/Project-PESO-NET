from rest_framework import generics
from django.shortcuts import get_object_or_404

from .models import Post, Comments, Engagement, Resume, Profile
from .serializers import PostSerializer, CommentsSerializer, EngagementSerializer, ResumeSerializer, ProfileSerializer


class PostList(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class Comment(generics.ListCreateAPIView):
    queryset = Comments.objects.all()
    serializer_class = CommentsSerializer


class ResumePost(generics.ListCreateAPIView):
    queryset = Resume.objects.all()
    serializer_class = ResumeSerializer


class ProfilePost(generics.ListCreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


class ResumePut(generics.RetrieveUpdateAPIView):
    serializer_class = ResumeSerializer

    def get_object(self):
        account = self.kwargs['account']
        return get_object_or_404(Resume, account=account)


class ProfilePut(generics.RetrieveUpdateAPIView):
    serializer_class = ProfileSerializer

    def get_object(self):
        account = self.kwargs['account']
        return get_object_or_404(Profile, account=account)


class CommentPut(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comments.objects.all()
    serializer_class = CommentsSerializer


class EngagementSetter(generics.ListCreateAPIView):
    queryset = Engagement.objects.all()
    serializer_class = EngagementSerializer


class EngagementPut(generics.RetrieveUpdateDestroyAPIView):
    queryset = Engagement.objects.all()
    serializer_class = EngagementSerializer

    def get_object(self):
        custom_key = self.kwargs['custom_key']
        return get_object_or_404(Engagement, custom_key=custom_key)


class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def get(self, request, *args, **kwargs):
        response = super().get(request, *args, **kwargs)
        post = self.get_object()

        comments = Comments.objects.filter(post=post)
        c_serializer = CommentsSerializer(comments, many=True)
        response.data['comments'] = c_serializer.data

        engagements = Engagement.objects.filter(post=post)
        e_serializer = EngagementSerializer(engagements, many=True)
        response.data['engagement'] = e_serializer.data

        return response
