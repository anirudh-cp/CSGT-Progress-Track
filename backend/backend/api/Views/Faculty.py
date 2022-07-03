from email.policy import HTTP
from requests import delete
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions

import sys

from uritemplate import partial
sys.path.append('../..')

from api.models import personal
from api.serializers import personalserializer

class FacultySingleApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.IsAuthenticated]

    # 1. List single
    def get(self, request, Emp_ID, *args, **kwargs):
        ''' List text for given requested user. '''
        
        if personal.objects.filter(Emp_ID=Emp_ID).exists():
            data = personal.objects.filter(Emp_ID=Emp_ID)
            serializer = personalserializer(data, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
            
        return Response("", status=status.HTTP_404_NOT_FOUND)
        

    # 2. Create/Update
    def put(self, request, Emp_ID, *args, **kwargs):
        ''' Create/Update the record with given data. '''
        
        data = request.data
        if personal.objects.filter(Emp_ID=Emp_ID).exists():
            record = personal.objects.get(Emp_ID=Emp_ID)
            serializer = personalserializer(record, data=data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            serializer = personalserializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
    def delete(self, request, Emp_ID, *args, **kwargs):
        """ Delete the record specified. """
        
        if personal.objects.filter(Emp_ID=Emp_ID).exists():
            personal.objects.filter(Emp_ID=Emp_ID).delete()
            return Response("", status=status.HTTP_200_OK)
            
        return Response("", status=status.HTTP_404_NOT_FOUND)


class FacultyAllApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.IsAuthenticated]

    # 1. List all
    def get(self, request, *args, **kwargs):
        ''' Get all records. '''
        
        if personal.objects.exists():
            data = personal.objects
            serializer = personalserializer(data, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)

        return Response("", status=status.HTTP_404_NOT_FOUND)
    
        