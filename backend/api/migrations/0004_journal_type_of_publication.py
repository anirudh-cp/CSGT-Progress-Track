# Generated by Django 4.0.5 on 2022-08-09 20:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_industrial_interaction_title_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='journal',
            name='type_of_publication',
            field=models.CharField(choices=[('Open Access', 'Open Access'), ('Subscription', 'Subscription')], default='Open Access', max_length=100),
            preserve_default=False,
        ),
    ]