from django.urls import path
from .views import PostList, PostDetail, Comment, EngagementSetter, ResumePost, ProfilePost, ResumePut, ProfilePut, EngagementPut, CommentPut

from chat.views import Conversation

urlpatterns = [
    path('create-post', PostList.as_view()),
    path('create-post/<int:pk>', PostDetail.as_view()),
    path('create-comment', Comment.as_view()),
    path('create-engagement', EngagementSetter.as_view()),

    path('create-resume', ResumePost.as_view()),
    path('create-profile', ProfilePost.as_view()),

    path('create-resume/<int:account>', ResumePut.as_view()),
    path('create-profile/<int:account>', ProfilePut.as_view()),
    path('create-engagement/<int:custom_key>', EngagementPut.as_view()),
    path('create-comment/<int:pk>', CommentPut.as_view()),

    # path('get-all', views.get_all_posts, name='get-all'),
    path('', Conversation.as_view())
]
