# Generated by Django 4.0.5 on 2022-07-08 18:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_remove_conference_unique_empid_doi_combination_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='book_chapter',
            name='Author_name',
        ),
        migrations.RemoveField(
            model_name='book_editor',
            name='Author_name',
        ),
        migrations.RemoveField(
            model_name='journal',
            name='Author_name',
        ),
    ]
