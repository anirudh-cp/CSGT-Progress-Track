from django.shortcuts import render, redirect
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import *
from .forms import *
from .models import *
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import Group
from .decorators import *


@unauthenticated_user
def loginpage(request):
	
	if request.method=='POST':
		username=request.POST.get('Username')
		password=request.POST.get('Password')
		user = authenticate(request, username=username,password=password)
		if user is not None:
			login(request, user)
			return redirect('homepage')
	
	return render(request,'dash/login.html')

	

def logoutuser(request):

	logout(request)
	return redirect('loginpage')


@unauthenticated_user
def registrationpage(request):
	form= CreateUserForm()

	if request.method=='POST':
		form = CreateUserForm(request.POST)
		if form.is_valid():
			user = form.save()

			group= Group.objects.get(name="Faculty")
			user.groups.add(group)

			return redirect('loginpage')

	context={'form':form}
	return render(request,'dash/Reset.html',context)


@login_required(login_url='loginpage')
@allowed(allowed_roles=['Faculty'])
def homepage(request):

	return render(request,'dash/home.html')


@api_view(['GET'])
def personlist(request):

	person=personal.objects.all()
	serializer = personalserializer(person,many=True)
	return Response(serializer.data)


@api_view(['GET'])
def persondetails(request,pk):

	person=personal.objects.get(id=pk)
	serializer = personalserializer(person,many=False)
	return Response(serializer.data)


@api_view(['POST'])
def createdetail(request):

	serializer = personalserializer(data=request.data)
	if serializer.is_valid():
		serializer.save()
	return Response(serializer.data)


@api_view(['POST'])
def updatedetails(request,pk):

	person=personal.objects.get(id=pk)
	serializer = personalserializer(instance=person,data=request.data)
	if serializer.is_valid():
		serializer.save()
	return Response(serializer.data)


@api_view(['DELETE'])
def deletedetails(request,pk):

	person=personal.objects.get(id=pk)
	person.delete()
	return Response("deleted !!!")


@api_view(['GET'])
def patentlist(request):

	Patent=patent.objects.all()
	serializer = patentserializer(Patent,many=True)
	return Response(serializer.data)


@api_view(['GET'])
def patentdetails(request,pk):

	Patent=patent.objects.get(Emp_ID=pk)
	serializer = patentserializer(Patent,many=False)
	return Response(serializer.data)


@api_view(['POST'])
def createpatent(request):

	serializer = patentserializer(data=request.data)
	if serializer.is_valid():
		serializer.save()
	return Response(serializer.data)


@api_view(['POST'])
def updatepatent(request,pk):
	Patent=patent.objects.get(id=pk)
	serializer = patentserializer(instance=Patent,data=request.data)
	if serializer.is_valid():
		serializer.save()
	return Response(serializer.data)


@api_view(['DELETE'])
def deletepatent(request,pk):

	Patent=patent.objects.get(id=pk)
	Patent.delete()
	return Response("deleted patent details !!!")

@api_view(['GET'])
def counsultancylist(request):

	Counsultancy=patent.objects.all()
	serializer = consultancyserializer(Counsultancy,many=True)
	return Response(serializer.data)


@api_view(['GET'])
def counsultancydetails(request,pk):

	Counsultancy=patent.objects.get(Emp_ID=pk)
	serializer = consultancyserializer(Counsultancy,many=False)
	return Response(serializer.data)


@api_view(['POST'])
def createcounsultancy(request):

	serializer = consultancyserializer(data=request.data)
	if serializer.is_valid():
		serializer.save()
	return Response(serializer.data)


@api_view(['POST'])
def updatecounsultancy(request,pk):
	Counsultancy=patent.objects.get(id=pk)
	serializer = consultancyserializer(instance=Counsultancy,data=request.data)
	if serializer.is_valid():
		serializer.save()
	return Response(serializer.data)


@api_view(['DELETE'])
def deletepatent(request,pk):

	Counsultancy=patent.objects.get(id=pk)
	Counsultancy.delete()
	return Response("deleted patent details !!!")
