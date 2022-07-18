from requests import request
from api.models import Account, personal
from api.serializers import RegistrationUserSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from django.contrib.auth import authenticate
from rest_framework.authentication import TokenAuthentication
from rest_framework.decorators import api_view, authentication_classes, permission_classes

from rest_framework.authtoken.models import Token

import sys
sys.path.append('../..')


@api_view(['POST', ])
@permission_classes([IsAuthenticated])
@authentication_classes([TokenAuthentication])
def registration_view(request):

    if request.method == 'POST':
        data = {}
        
        email = request.data.get('email', '0').lower()
        if validate_email(email) != None:
            data['error_message'] = 'That email is already in use.'
            data['response'] = 'Error'
            return Response(data)

        group = request.user.groups.values_list('name',flat = True)
        if group != 'director' and group != 'admin':
            data['error_message'] = 'Cannot create new user unless director or admin.'
            data['response'] = 'Error'
            return Response(data)

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
        return Response(data)


def validate_email(email):
    account = None
    try:
        account = Account.objects.get(email=email)
    except Account.DoesNotExist:
        return None
    if account != None:
        return email


class ObtainAuthTokenView(APIView):

    authentication_classes = []
    permission_classes = []

    def post(self, request):
        context = {}

        email = request.data.get('email')
        password = request.data.get('password')
        
        account = authenticate(email=email, password=password)
        if account:
            try:
                token = Token.objects.get(user=account)
            except Token.DoesNotExist:
                token = Token.objects.create(user=account)
            context['response'] = 'Successfully authenticated.'
            context['groups'] = list(account.groups.values_list('name', flat=True))
            context['email'] = account.email
            
            if context['groups'][0] == 'faculty':
                queryData = personal.objects.filter(user=account.email)[0]
                context['name'] = queryData.Name
                context['Emp_ID'] = queryData.Emp_ID
            elif context['groups'][0] == 'admin':
                context['name'] = "Admin"
                context['Emp_ID'] = 0
            elif context['groups'][0] == 'director':
                context['name'] = "Director"
                context['Emp_ID'] = 0

                
            context['token'] = token.key
        else:
            context['response'] = 'Error'
            context['error_message'] = 'Invalid credentials'

        return Response(context)