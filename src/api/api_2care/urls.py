"""
URL configuration for api_2care project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path
from core.views import CareRequestAccept, CareRequestDecline, CareRequestDetail, CareRequestListCreate, CarereceiverDetail, CarereceiverEdit, GreetingList, CaregiverList, CaregiverEdit, CaregiverSelfCalendarView, CaregiverDetail, CaregiverCalendarView,  QualificationCreate, QualificationRetrieveUpdateDestroy, RatingCreate, RatingDetail, SpecializationListCreateView, SpecializationRetrieveUpdateDestroyView, UserSignup
from rest_framework_simplejwt.views import (TokenObtainPairView,TokenRefreshView,TokenVerifyView)
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
   openapi.Info(
      title="2Care API",
      default_version='v1',
      description="2Care API documentation",
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path("admin/", admin.site.urls),
    path('greetings/', GreetingList.as_view(), name='greeting-list'),

    path('caregiver', CaregiverList.as_view(), name='caregiver-list'),
    path('caregiver/', CaregiverEdit.as_view(), name='caregiver-edit'),
    path('caregiver/my-calendar', CaregiverSelfCalendarView.as_view(), name='caregiver-self-calendar-view'), 

    path('caregiver/<uuid:pk>', CaregiverDetail.as_view(), name='caregiver-detail'),
    path('caregiver/<uuid:pk>/calendar', CaregiverCalendarView.as_view(), name='caregiver-calendar-view'),
    #path('caregiver/<uuid:pk>/rating', CaregiverRatingView.as_view(), name='caregiver-view-rating'), sem model suficiente.

    #Qualification (Odair)
    path('qualification/', QualificationCreate.as_view(), name='qualification-create'),
    path('qualification/<uuid:pk>/', QualificationRetrieveUpdateDestroy.as_view(), name='qualification-update-delete'),

    ##### Specialization - Leo #####
    path('specialization/', SpecializationListCreateView.as_view(), name='specialization-list'),
    path('specialization/<uuid:pk>/', SpecializationRetrieveUpdateDestroyView.as_view(), name='specialization-list-update-delete'),

    path('carereceiver/<uuid:pk>', CarereceiverDetail.as_view(), name='carereceiver-detail'),
    path('carereceiver/', CarereceiverEdit.as_view(), name='carereceiver-edit'),

    path('register/', UserSignup.as_view(), name='register'),

    path('requests/', CareRequestListCreate.as_view(), name='care-request-list-create'),
    path('requests/<uuid:pk>/', CareRequestDetail.as_view(), name='care-request-detail'),
    path('requests/<uuid:pk>/accept/', CareRequestAccept.as_view(), name='care-request-accept'),
    path('requests/<uuid:pk>/decline/', CareRequestDecline.as_view(), name='care-request-decline'),

    path('ratings/', RatingCreate.as_view(), name='rating-create'),
    path('ratings/<uuid:pk>/', RatingDetail.as_view(), name='rating-detail'),

    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('swagger<format>/', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]