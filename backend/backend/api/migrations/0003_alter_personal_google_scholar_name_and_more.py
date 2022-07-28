# Generated by Django 4.0.5 on 2022-07-28 18:18

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_personal_google_scholar_name_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='personal',
            name='Google_scholar_name',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='personal',
            name='ORCID_ID',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='personal',
            name='Personal_page',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='personal',
            name='Researchgate',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='personal',
            name='linkedin',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='personal',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]