from django.urls import path, include, register_converter
from rest_framework_simplejwt.views import (
    TokenRefreshView,
    TokenVerifyView
)

from .Views.Faculty import *
from .Views.Actions import *
from .Views.Account import *
from .Views.Data import *

from .convertors import DateConverter

register_converter(DateConverter, 'date')

urlpatterns = [
    
    path('faculty/<int:emp_id>', FacultySingleApiView.as_view()),
    path('faculty', FacultyAllApiView.as_view()),
    
    path('actions/<date:startDate>/<date:endDate>/<path:data>', ActionsReportApiView.as_view()),
    path('actions/users', ActionsUsersApiView.as_view()),
     
    path('account/login', CustomTokenObtainPairView.as_view()),
    path('account/register', registration_view),
    
    path('user/login', CustomTokenObtainPairView.as_view()),
    path('user/register', registration_view),   
    
    path('token', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify', TokenVerifyView.as_view(), name='token_verify'),
    
    path('data/<int:emp_id>/<Type>/<date:startDate>/<date:endDate>', DataSingleGetApiView.as_view()),
    path('data/<int:emp_id>/<Type>', DataSinglePutApiView.as_view()),
    path('data/<Type>/<date:startDate>/<date:endDate>', DataAllApiView.as_view()),
    path('data/<Type>/<int:record_id>', DataSingleDeleteApiView.as_view()),      
]
