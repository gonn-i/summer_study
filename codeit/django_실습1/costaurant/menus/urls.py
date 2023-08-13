from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('foods/', views.menu),
    path('foods/<str:food>', views.foods_detail)
]
