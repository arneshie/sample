from django.urls import path
from .views import RegisterView, SignInView

urlpatterns = [
    path('sign-in/', SignInView.as_view(), name='sign_in'),
    path('sign-in/', SignInView.as_view(), name='sign_in'),
    path('register/', RegisterView.as_view(), name='register'),
]