from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('/home', views.index),
    path('<str:city>/', views.city_detail)
]
