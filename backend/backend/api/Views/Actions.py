from api.serializers import *
from api.models import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from django.db.models import F
from sklearn.preprocessing import quantile_transform

from xhtml2pdf import pisa
from django.http import HttpResponse
from django.template.loader import get_template
import sys
import datetime

sys.path.append('../..')


# sample : api/actionsconference/consultancy/patent/journal/book_chapter/book_editor


class ActionsReportApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, startDate, endDate, data, *args, **kwargs):

        data = data.split('/')
        dataPool = []
        if 'conference' in data:
            queryData = (conference.objects.filter(Conference_startdate__gt=startDate,
                                                   Conference_startdate__lte=endDate) |
                         conference.objects.filter(Conference_startdate__lte=startDate,
                                                   Conference_enddate__gte=startDate))
            dataPool.extend(queryData.values('Emp_ID', 'Conference_name', titleS=F(
                'title'), date=F('Conference_startdate')))
            dataPool.extend(queryData.values('Emp_ID', 'Conference_name', titleE=F(
                'title'), date=F('Conference_enddate')))

        if 'consultancy' in data:
            queryData = (consultancy_project.objects.filter(consultancy_startdate__gt=startDate,
                                                            consultancy_startdate__lte=endDate) |
                         consultancy_project.objects.filter(consultancy_startdate__lte=startDate,
                                                            consultancy_enddate__gte=startDate))
            dataPool.extend(queryData.values('Emp_ID', company_nameS=F(
                'company_name'), date=F('consultancy_startdate')))
            dataPool.extend(queryData.values('Emp_ID', company_nameE=F(
                'company_name'), date=F('consultancy_enddate')))

        if 'patent' in data:
            queryData = patent.objects.filter(patent_created_date__gte=startDate,
                                              patent_created_date__lte=endDate)
            dataPool.extend(queryData.values(
                'Emp_ID', 'patent_title', date=F('patent_created_date')))

        if 'journal' in data:
            queryData = journal.objects.filter(
                year__gte=startDate.year, year__lte=endDate.year)
            temp = queryData.values(
                'Emp_ID', 'title', 'Journal_name', date=F('year'))
            for index, val in enumerate(temp):
                temp[index]['date'] = datetime.date(val['date'], 1, 1)
            dataPool.extend(temp)

        if 'book_chapter' in data:
            queryData = book_chapter.objects.filter(
                year__gte=startDate.year, year__lte=endDate.year)
            temp = queryData.values(
                'Emp_ID', 'title', 'book_title',  date=F('year'))
            for index, val in enumerate(temp):
                temp[index]['date'] = datetime.date(val['date'], 1, 1)
            dataPool.extend(temp)

        if 'publisher_name' in data:
            queryData = book_editor.objects.filter(
                year__gte=startDate.year, year__lte=endDate.year)
            temp = queryData.values(
                'Emp_ID', 'title', 'publisher_name',  date=F('year'))
            for index, val in enumerate(temp):
                temp[index]['date'] = datetime.date(val['date'], 1, 1)
            dataPool.extend(temp)

        dataPool = sorted(dataPool, key=lambda d: d['date'])

        Emp_IDs = list(set(d['Emp_ID'] for d in dataPool))
        NameDict = personal.objects.filter(
            Emp_ID__in=Emp_IDs).values_list('Emp_ID', 'Name')
        NameDict = dict(NameDict)

        records = []
        for record in dataPool:
            line = f"{NameDict[record['Emp_ID']]} ({record['Emp_ID']}) "

            if 'titleS' in record:
                line = line + \
                    f"attends {record['Conference_name']} starting on {record['date']} for presenting paper {record['titleS']}."
            elif 'titleE' in record:
                line = line + \
                    f"attends {record['Conference_name']} ending on {record['date']} for presenting paper {record['titleE']}."
            elif 'company_nameS' in record:
                line = line + \
                    f"starts consulting with {record['company_nameS']}."
            elif 'company_nameE' in record:
                line = line + \
                    f"ends consulting with {record['company_nameE']}."
            elif 'patent_title' in record:
                line = line + f"creates patent about {record['patent_title']}."
            elif 'Journal_name' in record:
                line = line + \
                    f"publishes journal {record['title']} in {record['Journal_name']}."
            elif 'book_title' in record:
                line = line + \
                    f"publishes a book chapter {record['title']} in {record['book_title']}."
            elif 'book_editor' in record:
                line = line + \
                    f"publishes a book editorial {record['title']} with {record['publisher_name']} publications."

            records.append([record['date'].strftime('%Y-%m-%d'), line])
            line = ''

        template_path = 'format.html'
        context = {'currentDate': datetime.datetime.now(),
                   'startDate': startDate, 'endDate': endDate,
                   'params': ', '.join(x for x in data),
                   'records': records
                   }
        # Create a Django response object, and specify content_type as pdf
        response = HttpResponse(content_type='application/pdf')
        response['Content-Disposition'] = 'attachment; filename="report.pdf"'
        # find the template and render it.
        template = get_template(template_path)
        html = template.render(context)

        # create a pdf
        pisa_status = pisa.CreatePDF(
            html, dest=response)
        # if error then show some funny view
        if pisa_status.err:
            return HttpResponse('We had some errors <pre>' + html + '</pre>')
        return response
        # return Response(' ', status.HTTP_200_OK)
        # return FileResponse(buffer, as_attachment=True, filename="report.pdf")


class ActionsUsersApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, *args, **kwargs):
        # Modify the users permission.

        group = request.user.groups.values_list('name', flat=True)
        data = {}
        if not any(item in ('admin', 'director') for item in group):
            data['error_message'] = 'Cannot change user permission unless director or admin.'
            data['response'] = 'Error'
            return Response(data, status=status.HTTP_401_UNAUTHORIZED)

        data = request.data
        queryData = Account.objects.get(email=data['email'])

        queryData.groups.clear()
        group = Group.objects.get(name=data['group'])
        queryData.groups.add(group)
        queryData.save()

        data = {'response': 'Successfully changed group',
                'email': data['email'], 'group': data['group']}
        return Response(data, status=status.HTTP_200_OK)

    def delete(self, request, *args, **kwargs):
        # Delete the user
        
        group = request.user.groups.values_list('name', flat=True)
        data = {}
        if not any(item in ('admin', 'director') for item in group):
            data['error_message'] = 'Cannot delete user unless director or admin.'
            data['response'] = 'Error'
            return Response(data, status=status.HTTP_401_UNAUTHORIZED)

        data = request.data
        try:
            account = Account.objects.get(email=data['email'])
            account.delete()
            return Response('User deleted', status=status.HTTP_200_OK)
            
        except Account.DoesNotExist:
            return Response('User does not exist', status=status.HTTP_404_NOT_FOUND)
