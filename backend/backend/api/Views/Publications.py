from email.policy import HTTP
from matplotlib.pyplot import title
from requests import delete
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions

import sys

from uritemplate import partial
sys.path.append('../..')

from api.models import conference, journal, book_chapter, book_editor
from api.serializers import conferneceserializer, journalserializer, bookchapterserializer, bookeditorserializer

model = {'conference': conference, 'journal':journal, 'book_chapters': book_chapter, 'book_editor': book_editor}
serilaizerTypes = {'conference': conferneceserializer, 'journal':journalserializer, 
                   'book_chapters': bookchapterserializer, 'book_editor': bookeditorserializer}



class PublicationsSingleGetApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.IsAuthenticated]

    # 1. List single
    def get(self, request, Emp_ID, Type, startDate, endDate, *args, **kwargs):
        ''' List text for given requested user. '''
        
        if Type == 'conference':
            queryData = (model[Type].objects.filter(Emp_ID=Emp_ID, 
                                                Conference_startdate__gt=startDate, 
                                                Conference_startdate__lte=endDate) | 
                        model[Type].objects.filter(Emp_ID=Emp_ID, 
                                                Conference_startdate__lte=startDate, 
                                                Conference_enddate__gte=startDate))
        else:
            queryData = model[Type].objects.filter(Emp_ID=Emp_ID,
                                                   year__gte=startDate.year,
                                                   year__lte=endDate.year)

        
        if queryData.exists():
            serializer = serilaizerTypes[Type](queryData, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
            
        return Response("", status=status.HTTP_404_NOT_FOUND)



class PublicationsSinglePutApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.IsAuthenticated]


    # 2. Create/Update
    def put(self, request, Emp_ID, Type, *args, **kwargs):
        ''' Create/Update the record with given data. '''
        
        data = request.data
        queryData = model[Type].objects.filter(Emp_ID=Emp_ID, title=data['title'])
        if queryData.exists():
            data.pop('Type', None)
            serializer = serilaizerTypes[Type](queryData[0], data=data, partial=True)
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
    

class PublicationsAllApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.IsAuthenticated]

    # 1. List all
    def get(self, request, Type, startDate, endDate, *args, **kwargs):
        ''' Get all records. '''
       
        if Type == 'conference':
            queryData = (model[Type].objects.filter( 
                                                Conference_startdate__gt=startDate, 
                                                Conference_startdate__lte=endDate) | 
                        model[Type].objects.filter( 
                                                Conference_startdate__lte=startDate, 
                                                Conference_enddate__gte=startDate))
        else:
            queryData = model[Type].objects.filter(
                                                   year__gte=startDate.year,
                                                   year__lte=endDate.year)
            
        if queryData.exists():
            serializer = serilaizerTypes[Type](queryData, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
            
        return Response("", status=status.HTTP_404_NOT_FOUND)

        