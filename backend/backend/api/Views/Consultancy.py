from email.policy import HTTP
from requests import delete
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions

import sys

sys.path.append('../..')

from api.models import consultancy
from api.serializers import consultancyserializer


class ConsultancySingleGetApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.IsAuthenticated]

    # 1. List single
    def get(self, request, Emp_ID, startDate, endDate, *args, **kwargs):
        ''' List text for given requested user. '''
        
        queryData = (consultancy.objects.filter(Emp_ID=Emp_ID, 
                                               consultancy_startdate__gt=startDate, 
                                               consultancy_startdate__lte=endDate) | 
                     consultancy.objects.filter(Emp_ID=Emp_ID, 
                                               consultancy_startdate__lte=startDate, 
                                               consultancy_enddate__gte=startDate))
        
        
        if queryData.exists():
            serializer = consultancyserializer(queryData, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
            
        return Response("", status=status.HTTP_404_NOT_FOUND)



class ConsultancySinglePutApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.IsAuthenticated]


    # 2. Create/Update
    def put(self, request, Emp_ID, *args, **kwargs):
        ''' Create/Update the record with given data. '''
        
        data = request.data
        print(data)
        queryData = consultancy.objects.filter(Emp_ID=Emp_ID, company_name=data['company_name'])
        if queryData.exists():
            serializer = consultancyserializer(queryData[0], data=data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            serializer = consultancyserializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class ConsultancyAllApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.IsAuthenticated]

    # 1. List all
    def get(self, request, startDate, endDate, *args, **kwargs):
        ''' Get all records. '''
        
        queryData = (consultancy.objects.filter(consultancy_startdate__gt=startDate, 
                                                consultancy_startdate__lte=endDate) | 
                     consultancy.objects.filter(consultancy_startdate__lte=startDate, 
                                                consultancy_enddate__gte=startDate))
        
        
        if queryData.exists():
            serializer = consultancyserializer(queryData, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
            
        return Response("", status=status.HTTP_404_NOT_FOUND)

        