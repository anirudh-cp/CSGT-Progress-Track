from api.serializers import patentserializer
from api.models import patent
from email.policy import HTTP
from requests import delete
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions

import sys

from uritemplate import partial
sys.path.append('../..')


class PatentSingleGetApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.IsAuthenticated]

    # 1. List single
    def get(self, request, Emp_ID, startDate, endDate, *args, **kwargs):
        ''' List text for given requested user. '''

        queryData = patent.objects.filter(Emp_ID=Emp_ID,
                                           patent_created_date__gte=startDate,
                                           patent_created_date__lte=endDate)
        if queryData.exists():
            serializer=patentserializer(queryData, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)

        return Response("", status=status.HTTP_404_NOT_FOUND)



class PatentSinglePutApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes=[permissions.IsAuthenticated]


    # 2. Create/Update
    def put(self, request, Emp_ID, *args, **kwargs):
        ''' Create/Update the record with given data. '''

        data=request.data
        queryData=patent.objects.filter(
            Emp_ID=Emp_ID, patent_title=data['patent_title'])
        if queryData.exists():
            serializer=patentserializer(queryData[0], data=data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            serializer=patentserializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PatentAllApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes=[permissions.IsAuthenticated]

    # 1. List all
    def get(self, request, startDate, endDate, *args, **kwargs):
        ''' Get all records. '''

        queryData = patent.objects.filter(patent_created_date__gte=startDate,
                                          patent_created_date__lte=endDate)

        if queryData.exists():
            serializer=patentserializer(queryData, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)

        return Response("", status=status.HTTP_404_NOT_FOUND)
