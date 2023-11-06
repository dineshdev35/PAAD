from django.contrib import admin
from django.urls import path
from . import views 

urlpatterns = [
    path('dashboard/', views.dashboard_view, name='dashboard_view'),
    path('mp/', views.report, name='report'),


]