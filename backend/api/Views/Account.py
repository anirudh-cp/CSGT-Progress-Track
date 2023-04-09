from api.models import account, personal
from api.serializers import RegistrationUserSerializer, CustomTokenObtainPairSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from django.contrib.auth import authenticate
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status, permissions

from rest_framework.authtoken.models import Token

from rest_framework_simplejwt.views import TokenObtainPairView

import datetime
import requests
import sys

import dotenv
from pathlib import Path
import os

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

ENV_FILE_PATH = BASE_DIR / ".env"
dotenv.load_dotenv(ENV_FILE_PATH)

sys.path.append('../..')

@api_view(['POST', ])
@permission_classes([IsAuthenticated])
def registration_view(request):

    if request.method == 'POST':
        data = {}
        
        email = request.data.get('email', '0').lower()
        if validate_email(email) != None:
            data['error_message'] = 'That email is already in use.'
            data['response'] = 'Error'
            return Response(data, status=status.HTTP_409_CONFLICT)

        group = request.user.groups.values_list('name', flat=True)
        if not any(item in ('admin', 'director') for item in group):
            data['error_message'] = 'Cannot create new user unless director or admin.'
            data['response'] = 'Error'
            return Response(data, status=status.HTTP_401_UNAUTHORIZED)

        serializer = RegistrationUserSerializer(data=request.data)

        if serializer.is_valid():
            account = serializer.save(destinationGroup=request.data['destinationGroup'])
            data['response'] = 'successfully registered new user.'
            data['email'] = account.email
            data['groups'] = list(account.groups.values_list('name', flat=True))
            token = Token.objects.get(user=account).key
            data['token'] = token
        else:
            data = serializer.errors
        return Response(data, status=status.HTTP_201_CREATED)


def validate_email(email):
    try:
        accountObj = account.objects.get(email=email)
    except account.DoesNotExist:
        return None
    
    if accountObj != None:
        return email


class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

    def post(self, request):
        context = {}

        email = request.data.get('email')
        password = request.data.get('password')
        
        account = authenticate(email=email, password=password)
        if account:
            
            serializer = self.get_serializer(data=request.data)
            if serializer.is_valid():
                return Response(serializer.validated_data, status=status.HTTP_200_OK)
            else:
                return Response({'respones': 'Serialization error'}, status=status.HTTP_401_UNAUTHORIZED)

        else:
            context['response'] = 'Error'
            context['error_message'] = 'Invalid credentials'
            return Response(context, status=status.HTTP_404_NOT_FOUND)


class TokenAction(APIView):
    
    # TODO: Check if secure method of performing auth
    def get(self, request, token, *args, **kwargs):
        
        # return Response(f'{Token._meta.fields}', status=status.HTTP_200_OK)
        try:
            if Token.objects.get(key=token):
                return Response("", status=status.HTTP_200_OK)
        except Token.DoesNotExist:
            return Response("", status=status.HTTP_401_UNAUTHORIZED)
        except Exception as e:
            return Response('', status=status.HTTP_400_BAD_REQUEST)