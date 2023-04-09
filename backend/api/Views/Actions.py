from tokenize import Name
from api.serializers import *
from api.models import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from django.db.models import F

from xhtml2pdf import pisa
from django.http import HttpResponse
from django.template.loader import get_template
import sys
import datetime

import io
from django.http import FileResponse
from .PDFGenerator import ReportGenerator

import sys


sys.path.append('../..')


# sample : /api/actions/2020-01-01/2025-12-31/conference/journal/book/consultancy/patent/project/industrial


class ActionsReportApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, startDate, endDate, data, *args, **kwargs):

        context = self.getContext(startDate, endDate, data)

        buffer = io.BytesIO()
        reportObj = ReportGenerator(buffer, {'currentDate': datetime.datetime.now(),
                                             'params': context['params'], 'startDate': startDate,
                                             'endDate': endDate})
        reportObj.build(context)

        buffer.seek(0)
        return FileResponse(buffer, as_attachment=True, filename='CSGT Report.pdf')

        template_path = 'format.html'
        # Create a Django response object, and specify content_type as pdf
        response = HttpResponse(content_type='application/pdf')
        response['Content-Disposition'] = 'attachment; filename="report.pdf"'
        # find the template and render it.
        template = get_template(template_path)
        html = template.render(context)

        # create a pdf
        pisa_status = pisa.CreatePDF(html.encode(
            'UTF-8'), encoding="UTF-8", dest=response)

        # if error then show some funny view
        if pisa_status.err:
            return HttpResponse('We had some errors <pre>' + html + '</pre>')
        return response
        # return Response(' ', status.HTTP_200_OK)
        # return FileResponse(buffer, as_attachment=True, filename="report.pdf")

    def post(self, request, startDate, endDate, data, *args, **kwargs):

        employees = request.data['employees']
        context = self.getContext(startDate, endDate, data, {
                                  'emp_id__in': employees})

        # if 'asFaculty' in data.split('/'):
        #     template_path = 'formatFaculty.html'
        #     print('asFaculty')
        # else:
        #     template_path = 'format.html'
        template_path = 'format.html'
        # Create a Django response object, and specify content_type as pdf
        response = HttpResponse(content_type='application/pdf')
        response['Content-Disposition'] = 'attachment; filename="report.pdf"'
        # find the template and render it.
        template = get_template(template_path)
        html = template.render(context)

        # create a pdf
        pisa_status = pisa.CreatePDF(html.encode(
            'UTF-8'), encoding="UTF-8", dest=response)
        # if error then show some funny view
        if pisa_status.err:
            return HttpResponse('We had some errors <pre>' + html + '</pre>')
        return response
        # return Response(' ', status.HTTP_200_OK)
        # return FileResponse(buffer, as_attachment=True, filename="report.pdf")

    def getContext(self, startDate, endDate, data, filters={}, asFaculty=False):

        data = data.split('/')

        dataPool = {}
        context = {
            'currentDate': datetime.datetime.now(),
            'startDate': startDate, 'endDate': endDate,
            'params': ', '.join(x for x in data),
            'title': 'Center for Smart Grid Technologies',
            'subtitle': 'VIT - Chennai'
        }

        if 'conference' in data:
            queryData = (conference.objects.filter(start_date__gt=startDate, start_date__lte=endDate, **filters) |
                         conference.objects.filter(start_date__lte=startDate, end_date__gte=startDate, **filters))
            queryFields = queryData.values(
                'emp_id', 'start_date', 'article_title', 'conference_name', 'end_date')
            dataPool['conference'] = sorted(
                queryFields, key=lambda d: d['start_date'])

        if 'journal' in data:
            queryData = (journal.objects.filter(
                year__gte=startDate.year, year__lte=endDate.year, **filters))
            queryFields = queryData.values(
                'emp_id', 'year', 'article_title', 'journal_name')
            dataPool['journal'] = sorted(queryFields, key=lambda d: d['year'])

        if 'book' in data:
            queryDataChapter = (book.objects.filter(
                year__gte=startDate.year, year__lte=endDate.year, type='Book Chapter', **filters))
            queryDataEditor = (book.objects.filter(
                year__gte=startDate.year, year__lte=endDate.year, type='Book Editorial', **filters))

            queryFieldsChapter = queryDataChapter.values(
                'emp_id', 'year', 'book_title', 'chapter_title', 'publisher_name')
            dataPool['bookChapter'] = sorted(
                queryFieldsChapter, key=lambda d: d['year'])

            queryFieldsEditor = queryDataEditor.values(
                'emp_id', 'year', 'book_title', 'publisher_name')
            dataPool['bookEditor'] = sorted(
                queryFieldsEditor, key=lambda d: d['year'])

        if 'event' in data:
            queryDataOrg = (event.objects.filter(start_date__gt=startDate, start_date__lte=endDate,
                                                 type="Organized", **filters) |
                            event.objects.filter(start_date__lte=startDate, end_date__gte=startDate,
                                                 type="Organized", **filters))

            queryDataAtd = (event.objects.filter(start_date__gt=startDate, start_date__lte=endDate,
                                                 type="Attended", **filters) |
                            event.objects.filter(start_date__lte=startDate, end_date__gte=startDate,
                                                 type="Attended", **filters))

            queryFieldsOrg = queryDataOrg.values(
                'emp_id', 'start_date', 'end_date', 'title', 'event')
            dataPool['eventOrg'] = sorted(
                queryFieldsOrg, key=lambda d: d['start_date'])

            queryFieldsAtd = queryDataAtd.values(
                'emp_id', 'start_date', 'end_date', 'title', 'event')
            dataPool['eventAtd'] = sorted(
                queryFieldsAtd, key=lambda d: d['start_date'])

        if 'consultancy' in data:
            queryData = (consultancy.objects.filter(start_date__gt=startDate, start_date__lte=endDate, **filters) |
                         consultancy.objects.filter(start_date__lte=startDate, end_date__gte=startDate, **filters))
            queryFields = queryData.values(
                'emp_id', 'start_date', 'type', 'company_name', 'end_date', 'amount_sanctioned')
            dataPool['consultancy'] = sorted(
                queryFields, key=lambda d: d['start_date'])

        if 'patent' in data:
            queryData = (patent.objects.filter(
                filed_date__gt=startDate, filed_date__lte=endDate, **filters))
            queryFields = queryData.values(
                'emp_id', 'filed_date', 'published_date', 'granted_date', 'title')
            dataPool['patent'] = sorted(
                queryFields, key=lambda d: d['filed_date'])

        if 'project' in data:
            queryData = (project.objects.filter(
                start_date__gt=startDate, start_date__lte=endDate, **filters))
            queryFields = queryData.values(
                'emp_id', 'funding_agency', 'role', 'amount_sanctioned', 'title', 'start_date')
            dataPool['project'] = sorted(
                queryFields, key=lambda d: d['start_date'])

        if 'industrial' in data:
            queryData = (industrial_interaction.objects.filter(
                date__gt=startDate, date__lte=endDate, **filters))
            queryFields = queryData.values('emp_id', 'mou_signed', 'date')
            dataPool['industrial'] = sorted(
                queryFields, key=lambda d: d['date'])

        # Get list of all employee IDs to find their names.
        Emp_IDs = list(set(item['emp_id']
                       for type in dataPool.values() for item in type))
        NameDict = personal.objects.filter(
            emp_id__in=Emp_IDs).values_list('emp_id', 'name')
        NameDict = dict(NameDict)

        # Create the text to be written into the document
        if 'conference' in data:
            reportData = []
            for item in dataPool['conference']:
                reportData.append((item['start_date'], f"{item['article_title']} in "
                                   f"{item['conference_name']} for {(item['end_date'] - item['start_date']).days} days "
                                   + f"by {NameDict[item['emp_id']]} ({item['emp_id']})" if not asFaculty else ""))
            context['conference'] = reportData

        if 'journal' in data:
            reportData = []
            for item in dataPool['journal']:
                reportData.append((item['year'], f"{item['article_title']} in "
                                   f"{item['journal_name']} "
                                   + f"by {NameDict[item['emp_id']]} ({item['emp_id']})" if not asFaculty else ""))
            context['journal'] = reportData

        if 'book' in data:
            reportData = []
            for item in dataPool['bookChapter']:
                reportData.append((item['year'], f"{item['chapter_title']} in "
                                   f"{item['book_title']} published by {item['publisher_name']} and authored by "
                                   + f"by {NameDict[item['emp_id']]} ({item['emp_id']})" if not asFaculty else ""))
            context['bookChapter'] = reportData

            reportData = []
            for item in dataPool['bookEditor']:
                reportData.append((item['year'], f"{item['book_title']} published by "
                                   f"{item['publisher_name']} and authored by "
                                   + f"by {NameDict[item['emp_id']]} ({item['emp_id']})" if not asFaculty else ""))
            context['bookEditor'] = reportData

        if 'event' in data:
            reportData = []
            for item in dataPool['eventOrg']:
                reportData.append((item['start_date'], f"{item['title']} "
                                   f" ({item['event']}) organized "
                                   f"for {(item['end_date'] - item['start_date']).days} days "
                                   + f"by {NameDict[item['emp_id']]} ({item['emp_id']})" if not asFaculty else ""))
            context['eventOrg'] = reportData

            reportData = []
            for item in dataPool['eventAtd']:
                reportData.append((item['start_date'], f"{item['title']} "
                                   f" ({item['event']}) attended "
                                   f"for {(item['end_date'] - item['start_date']).days} days "
                                   + f"by {NameDict[item['emp_id']]} ({item['emp_id']})" if not asFaculty else ""))
            context['eventAtd'] = reportData

        if 'consultancy' in data:
            reportData = []
            for item in dataPool['consultancy']:
                reportData.append((item['start_date'], f"{item['type']} with "
                                   f"{item['company_name']} for {(item['end_date'] - item['start_date']).days} days "
                                   f"with Rs.{item['amount_sanctioned']} amount sanctioned "
                                   + f"by {NameDict[item['emp_id']]} ({item['emp_id']})" if not asFaculty else ""))
            context['consultancy'] = reportData

        if 'patent' in data:
            reportData = []
            for item in dataPool['patent']:
                line = f"{item['title']} "
                if item['published_date']:
                    line += f" published on {item['published_date']} "
                if item['granted_date']:
                    line += f" granted on {item['granted_date']} "
                line += f"by {NameDict[item['emp_id']]} ({item['emp_id']})" if not asFaculty else ""
                reportData.append((f"Filed on {item['filed_date']}", line))
            context['patent'] = reportData

        if 'project' in data:
            reportData = []
            for item in dataPool['project']:
                reportData.append((item['start_date'], f"{item['title']} funded by  "
                                   f"{item['funding_agency']} for Rs.{item['amount_sanctioned']} "
                                   + f"by {NameDict[item['emp_id']]} ({item['emp_id']}) as {item['role']}" if not asFaculty else ""))
            context['project'] = reportData

        if 'industrial' in data:
            reportData = []
            for item in dataPool['industrial']:
                reportData.append((item['date'], f"MOU signed status: {item['mou_signed']} "
                                   + f"by {NameDict[item['emp_id']]} ({item['emp_id']})" if not asFaculty else ""))
            context['industrial'] = reportData

        employees = []
        for key, value in NameDict.items():
            employees.append([key, value,
                              conference.objects.filter(emp_id=key).count(),
                              journal.objects.filter(emp_id=key).count(),
                              book.objects.filter(emp_id=key).count(),
                              event.objects.filter(emp_id=key).count(),
                              consultancy.objects.filter(emp_id=key).count(),
                              patent.objects.filter(emp_id=key).count(),
                              project.objects.filter(emp_id=key).count(),
                              industrial_interaction.objects.filter(emp_id=key).count()])
        context['employees'] = employees

        return context


class ActionsUsersApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, *args, **kwargs):
        # Modify the users permission.

        group = request.user.groups.values_list('name', flat=True)
        data = {}
        if not any(item in ('admin', 'director') for item in group):
            return Response('Cannot change user permission unless director or admin.',
                            status=status.HTTP_401_UNAUTHORIZED)

        data = request.data
        queryData = None
        try:
            queryData = account.objects.get(email=data['email'])
        except account.DoesNotExist:
            return Response('User does not exist', status=status.HTTP_404_NOT_FOUND)

        groups = list(queryData.groups.values_list('name', flat=True))
        if not any(item in ('admin', 'director') for item in groups):
            return Response('Cannot change user permission as they are faculty',
                            status=status.HTTP_401_UNAUTHORIZED)

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
            accountObj = account.objects.get(email=data['email'])
            accountObj.delete()
            return Response('User deleted', status=status.HTTP_200_OK)
        except account.DoesNotExist:
            return Response('User does not exist', status=status.HTTP_404_NOT_FOUND)
