from rest_framework import serializers
from .models import *
from django.contrib.auth.models import Group

from django.conf import settings as django_settings

if django_settings.DATABASE_URL:
    from rest_framework_simplejwt_mongoengine.serializers import TokenObtainPairSerializer
else:
    from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class personalserializer(serializers.ModelSerializer):
	class Meta:
		model=personal
		fields='__all__'

class conferneceserializer(serializers.ModelSerializer):
	class Meta:
		model=conference
		fields='__all__'

class journalserializer(serializers.ModelSerializer):
	class Meta:
		model=journal
		fields='__all__'

class bookserializer(serializers.ModelSerializer):
	class Meta:
		model=book
		fields='__all__'

class consultancyserializer(serializers.ModelSerializer):
	class Meta:
		model=consultancy
		fields='__all__'

class patentserializer(serializers.ModelSerializer):
	class Meta:
		model=patent
		fields='__all__'
  
class projectserializer(serializers.ModelSerializer):
	class Meta:
		model=project
		fields='__all__'
  
class industrialserializer(serializers.ModelSerializer):
	class Meta:
		model=industrial_interaction
		fields='__all__'

class eventserializer(serializers.ModelSerializer):
	class Meta:
		model=event
		fields='__all__'
  
class userserializer(serializers.ModelSerializer):
    class Meta:
        model=account
        fields=('email', 'date_joined', 'is_superuser', 'groups')


class RegistrationUserSerializer(serializers.ModelSerializer):
    
    password2 = serializers.CharField(style={'input_type': 'password'},
                                      write_only=True)
    
    class Meta:
        model = account
        fields = ('email', 'password', 'password2')
        extra_kwargs = {
			'password': {'write_only': True}
		}
        
    def save(self, **kwargs):
        user = user(email=self.validated_data['email'])
        password = self.validated_data['password']
        password2 = self.validated_data['password2']
        
        if password != password2:
            raise serializers.ValidationError({'password': 'Passwords do not match.'})

        user.set_password(password)
        user.save()
        
        group = Group.objects.get(name=kwargs['destinationGroup'])
        user.groups.add(group)
        
        return user
    


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        
        # print("Custom serializer entr")
        
        token = super().get_token(user)
        
        try:
            token['group'] = user.groups.values_list('name', flat=True)[0]
        except:
            token['group'] = 'None'
        if token['group'] == 'faculty':
            try:
                queryData = personal.objects.get(user=user.email)
                token['name'] = queryData.name
                token['emp_id'] = queryData.emp_id
            except personal.DoesNotExist:
                token['name'] = 'undefined'
                token['emp_id'] = 0
        elif token['group'] == 'admin':
            token['name'] = "Admin"
            token['emp_id'] = 0
        elif token['group'] == 'director':
            token['name'] = "Director"
            token['emp_id'] = 0
    
        return token
