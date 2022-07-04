from django.urls import path, include, register_converter

from .Views.Faculty import FacultySingleApiView, FacultyAllApiView
from .Views.Publications import PublicationsSingleGetApiView, PublicationsSinglePutApiView, PublicationsAllApiView
from .convertors import DateConverter

register_converter(DateConverter, 'date')

urlpatterns = [
    path('faculty/<int:Emp_ID>', FacultySingleApiView.as_view()),
    path('faculty', FacultyAllApiView.as_view()),
    
    path('publications/<int:Emp_ID>/<Type>/<date:startDate>/<date:endDate>', PublicationsSingleGetApiView.as_view()),
    path('publications/<int:Emp_ID>/<Type>', PublicationsSinglePutApiView.as_view()),
    path('publications/<Type>/<date:startDate>/<date:endDate>', PublicationsAllApiView.as_view()),
]

