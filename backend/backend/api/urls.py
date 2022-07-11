from django.urls import path, include, register_converter

from .Views.Faculty import *
from .Views.Publications import *
from .Views.Consultancy import *
from .Views.Patent import *

from .Views.Actions import *

from .convertors import DateConverter

register_converter(DateConverter, 'date')

urlpatterns = [
    path('faculty/<int:Emp_ID>', FacultySingleApiView.as_view()),
    path('faculty', FacultyAllApiView.as_view()),
    
    path('publications/<int:Emp_ID>/<Type>/<date:startDate>/<date:endDate>', PublicationsSingleGetApiView.as_view()),
    path('publications/<int:Emp_ID>/<Type>', PublicationsSinglePutApiView.as_view()),
    path('publications/<Type>/<date:startDate>/<date:endDate>', PublicationsAllApiView.as_view()),
    
    path('consultancy/<int:Emp_ID>/<date:startDate>/<date:endDate>', ConsultancySingleGetApiView.as_view()),
    path('consultancy/<int:Emp_ID>', ConsultancySinglePutApiView.as_view()),
    path('consultancy/<date:startDate>/<date:endDate>', ConsultancyAllApiView.as_view()),
    
    path('patent/<int:Emp_ID>/<date:startDate>/<date:endDate>', PatentSingleGetApiView.as_view()),
    path('patent/<int:Emp_ID>', PatentSinglePutApiView.as_view()),
    path('patent/<date:startDate>/<date:endDate>', PatentAllApiView.as_view()),
    
     path('actions/<date:startDate>/<date:endDate>/<path:data>', ActionsApiView.as_view()),
]

