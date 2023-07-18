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
    def get(self, request, emp_id, *args, **kwargs):
        ''' List text for given requested user. '''
        
        if personal.objects.filter(emp_id=emp_id).exists():
            data = personal.objects.filter(emp_id=emp_id)
            serializer = personalserializer(data, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
            
        return Response([], status=status.HTTP_404_NOT_FOUND)
        

    # 2. Create/Update
    def put(self, request, emp_id, *args, **kwargs):
        ''' Create/Update the record with given data. '''
        
        data = request.data
        print(data)
        if personal.objects.filter(emp_id=emp_id).exists():
            record = personal.objects.get(emp_id=emp_id)
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
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
    def delete(self, request, emp_id, *args, **kwargs):
        """ Delete the record specified. """
        
        if personal.objects.filter(emp_id=emp_id).exists():
            personal.objects.filter(emp_id=emp_id).delete()
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

        return Response([], status=status.HTTP_404_NOT_FOUND)
    
        