from django.urls import path
from .views import PostList, PostDetail, Comment, EngagementSetter, ResumePost, ProfilePost, ResumePut, ProfilePut, EngagementPut, CommentPut

urlpatterns = [
    path('create-post', PostList.as_view()),
    path('create-post/<int:pk>', PostDetail.as_view()),
    path('create-comment', Comment.as_view()),
    path('create-engagement', EngagementSetter.as_view()),

    path('create-resume', ResumePost.as_view()),
    path('create-profile', ProfilePost.as_view()),

    path('create-resume/<int:pk>', ResumePut.as_view()),
    path('create-profile/<int:account>', ProfilePut.as_view()),
    path('create-engagement/<int:pk>', EngagementPut.as_view()),
    path('create-comment/<int:pk>', CommentPut.as_view()),

    # path('get-all', views.get_all_posts, name='get-all'),
]
