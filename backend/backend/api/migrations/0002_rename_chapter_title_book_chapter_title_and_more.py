# Generated by Django 4.0.5 on 2022-07-08 12:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='book_chapter',
            old_name='Chapter_title',
            new_name='title',
        ),
        migrations.RenameField(
            model_name='book_editor',
            old_name='TYpe_of_publisher',
            new_name='Type_of_publisher',
        ),
        migrations.RenameField(
            model_name='book_editor',
            old_name='book_title',
            new_name='title',
        ),
        migrations.RenameField(
            model_name='conference',
            old_name='Article_title',
            new_name='title',
        ),
        migrations.RenameField(
            model_name='journal',
            old_name='Artical_title',
            new_name='title',
        ),
    ]
