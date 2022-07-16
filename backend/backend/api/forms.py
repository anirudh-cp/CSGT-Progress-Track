from django.forms import ModelForm
from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .models import *

class CreateUserForm(UserCreationForm):
	class Meta:
		model=User
		fields=['username','email','password1','password2']


class profileform(ModelForm):
	class Meta:
		model=personal
		fields='__all__'

class conferenceform(ModelForm):
	class Meta:
		model=conference
		fields='__all__'

class journalform(ModelForm):
	class Meta:
		model=journal
		fields='__all__'

class book_chapterform(ModelForm):
	class Meta:
		model=book_chapter
		fields='__all__'

class book_editorform(ModelForm):
	class Meta:
		model=book_editor
		fields='__all__'

class consultancy_projectform(ModelForm):
	class Meta:
		model=consultancy_project
		fields='__all__'

class patentform(ModelForm):
	class Meta:
		model=patent
		fields='__all__'


