# Generated by Django 4.0.5 on 2022-07-29 09:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_personal_orcid_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='journal',
            name='DOI',
            field=models.CharField(blank=True, max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='journal',
            name='Impact_factor',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='journal',
            name='Issue_no',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='journal',
            name='Vol_no',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
