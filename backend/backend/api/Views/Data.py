from api.serializers import *
from api.models import *
from email.policy import HTTP
from requests import delete
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions

import sys

from uritemplate import partial
sys.path.append('../..')


model = {'conference': conference, 'journal': journal, 'book': book,
         'consultancy': consultancy, 'patent': patent, 'project': project,
         'industrial': industrial_interaction, 'event': event}

serilaizerTypes = {'conference': conferneceserializer, 'journal': journalserializer,
                   'book': bookserializer, 'consultancy': consultancyserializer,
                   'patent': patentserializer, 'project': projectserializer,
                   'industrial': industrialserializer, 'event':eventserializer}


class DataSingleGetApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.IsAuthenticated]

    # 1. List single
    def get(self, request, emp_id, Type, startDate, endDate, *args, **kwargs):
        ''' List text for given requested user. '''

        queryData = []
        if Type == 'conference' or Type == 'consultancy' or Type == "event":
            queryData = (model[Type].objects.filter(emp_id=emp_id, start_date__gt=startDate, start_date__lte=endDate) |
                         model[Type].objects.filter(emp_id=emp_id, start_date__lte=startDate, end_date__gte=startDate))
        elif Type == 'journal' or Type == 'book':
            queryData = model[Type].objects.filter(emp_id=emp_id, year__gte=startDate.year, year__lte=endDate.year)
        elif Type == 'patent':
            queryData = model[Type].objects.filter(emp_id=emp_id, filed_date__gt=startDate, filed_date__lte=endDate)
        elif Type == 'project':
            queryData = model[Type].objects.filter(emp_id=emp_id, start_date__gt=startDate, start_date__lte=endDate)
        elif Type == 'industrial':
            queryData = model[Type].objects.filter(emp_id=emp_id, date__gt=startDate, date__lte=endDate)
        else:
            return Response("Wrong resource", status=status.HTTP_400_BAD_REQUEST)

        if queryData.exists():
            serializer = serilaizerTypes[Type](queryData, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)

        return Response("", status=status.HTTP_404_NOT_FOUND)


class DataSinglePutApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.IsAuthenticated]

    # 2. Create/Update

    def put(self, request, emp_id, Type, *args, **kwargs):
        ''' Create/Update the record with given data. '''

        data = request.data
        queryData = []
        try:
            if Type == 'conference' or Type == 'journal':
                queryData = (model[Type].objects.filter(emp_id=emp_id, article_title=data['article_title']))
            elif Type == 'book':
                queryData = model[Type].objects.filter(emp_id=emp_id, book_title=data['book_title'])
            elif Type == 'patent' or Type == 'project' or Type == 'industrial':
                queryData = model[Type].objects.filter(emp_id=emp_id, title=data['title'])
            elif Type == 'consultancy':
                queryData = model[Type].objects.filter(emp_id=emp_id, company_name=data['company_name'], 
                                                    start_date=data['start_date'])
            elif Type == "event":
                queryData = (model[Type].objects.filter(emp_id=emp_id, title=data['title']))
            else:
                return Response("Wrong resource", status=status.HTTP_400_BAD_REQUEST)
        except Exception:
            return Response("Incorrect data", status=status.HTTP_400_BAD_REQUEST)
            
        if queryData.exists():
            data.pop('Type', None)
            serializer = serilaizerTypes[Type](
                queryData[0], data=data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            serializer = serilaizerTypes[Type](data=data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class DataAllApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.IsAuthenticated]

    # 1. List all
    def get(self, request, Type, startDate, endDate, *args, **kwargs):
        ''' Get all records. '''

        queryData = []
        if Type == 'conference' or Type == 'consultancy' or Type == "event":
            queryData = (model[Type].objects.filter(start_date__gt=startDate, start_date__lte=endDate) |
                         model[Type].objects.filter(start_date__lte=startDate, end_date__gte=startDate))
        elif Type == 'journal' or Type == 'book':
            queryData = model[Type].objects.filter(year__gte=startDate.year, year__lte=endDate.year)
        elif Type == 'patent':
            queryData = model[Type].objects.filter(filed_date__gt=startDate, filed_date__lte=endDate)
        elif Type == 'project':
            queryData = model[Type].objects.filter(start_date__gt=startDate, start_date__lte=endDate)
        elif Type == 'industrial':
            queryData = model[Type].objects.filter(date__gt=startDate, date__lte=endDate)
        else:
            return Response("Wrong resource", status=status.HTTP_400_BAD_REQUEST)


        if queryData.exists():
            serializer = serilaizerTypes[Type](queryData, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)

        return Response("", status=status.HTTP_404_NOT_FOUND)
