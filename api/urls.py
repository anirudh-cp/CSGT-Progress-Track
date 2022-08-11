from django.urls import path, include, register_converter

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
     
    path('account/login', ObtainAuthTokenView.as_view()),
    path('account/register', registration_view),
    
    path('data/<int:emp_id>/<Type>/<date:startDate>/<date:endDate>', DataSingleGetApiView.as_view()),
    path('data/<int:emp_id>/<Type>', DataSinglePutApiView.as_view()),
    path('data/<Type>/<date:startDate>/<date:endDate>', DataAllApiView.as_view()),
       
]

