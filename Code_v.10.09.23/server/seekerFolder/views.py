from rest_framework import generics

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
    queryset = Resume.objects.all()
    serializer_class = ResumeSerializer


class ProfilePut(generics.RetrieveUpdateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


class CommentPut(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comments.objects.all()
    serializer_class = CommentsSerializer


class EngagementSetter(generics.ListCreateAPIView):
    queryset = Engagement.objects.all()
    serializer_class = EngagementSerializer


class EngagementPut(generics.RetrieveUpdateDestroyAPIView):
    queryset = Engagement.objects.all()
    serializer_class = EngagementSerializer


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
