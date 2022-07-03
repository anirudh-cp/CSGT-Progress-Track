
from django.urls import path, include

from .Views.Faculty import FacultySingleApiView, FacultyAllApiView


urlpatterns = [
    path('faculty/<int:Emp_ID>', FacultySingleApiView.as_view()),
    path('faculty', FacultyAllApiView.as_view()),
]

