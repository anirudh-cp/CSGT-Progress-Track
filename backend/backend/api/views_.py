from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .models import SampleModel
from .serializers import SampleSerializer

class SampleApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.IsAuthenticated]

    # 1. List all
    def get(self, request, *args, **kwargs):
        '''
        List text for given requested user
        '''
        data = SampleModel.objects.filter(user = request.user.id)
        serializer = SampleSerializer(data, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # 2. Create
    def post(self, request, *args, **kwargs):
        '''
        Create the record with given data
        '''
        data = {
            'text': request.data.get('text'), 
            'user': request.user.id
        }
        serializer = SampleSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
    
    
from django.shortcuts import render, redirect
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import personalserializer
from .forms import CreateUserForm
from .models import personal
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required


def loginpage(request):
	if request.user.is_authenticated:
		return redirect('homepage')
	else:
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

def registrationpage(request):
	if request.user.is_authenticated:
		return redirect('homepage')
	else:
		if request.method=='POST':
			form = CreateUserForm(request.POST)
		if form.is_valid():
			form.save()
			return redirect('loginpage')
		else:
			form= CreateUserForm()

		context={'form':form}
		return render(request,'dash/Reset.html',context)

@login_required(login_url='loginpage')
def homepage(request):
	return render(request,'dash/home.html')

@api_view(['GET'])
def persondetails(request):

	person=personal.objects.all()
	serializer = personalserializer(person,many=True)
	return Response(serializer.data)

@api_view(['GET'])
def fulldetail(request,pk):

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





    
    
