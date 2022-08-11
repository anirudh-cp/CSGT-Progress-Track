# Generated by Django 4.0.5 on 2022-08-10 17:49

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_journal_type_of_publication'),
    ]

    operations = [
        migrations.CreateModel(
            name='event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('event', models.CharField(choices=[('FDP', 'FDP'), ('Workshop', 'Workshop'), ('Conference', 'Conference'), ('Seminar', 'Seminar'), ('Webinar', 'Webinar'), ('VAP', 'VAP'), ('Guest Lecture', 'Guest Lecture')], max_length=30)),
                ('type', models.CharField(choices=[('Organized', 'Organized'), ('Attended', 'Attended')], max_length=20)),
                ('start_date', models.DateField()),
                ('end_date', models.DateField()),
                ('no_of_participants', models.IntegerField(blank=True, null=True)),
                ('reg_fee', models.IntegerField()),
                ('collaboration', models.CharField(choices=[('National', 'National'), ('International', 'International'), ('Internal', 'Internal')], max_length=20)),
                ('sponspored', models.CharField(choices=[('Yes', 'Yes'), ('No', 'No')], max_length=5)),
                ('amount_from_vit', models.CharField(blank=True, choices=[('Yes', 'Yes'), ('No', 'No')], max_length=5, null=True)),
            ],
        ),
        migrations.AddConstraint(
            model_name='industrial_interaction',
            constraint=models.UniqueConstraint(fields=('emp_id', 'title'), name='unique-emp_id-title-industrial'),
        ),
        migrations.AddField(
            model_name='event',
            name='emp_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.personal'),
        ),
        migrations.AddConstraint(
            model_name='event',
            constraint=models.UniqueConstraint(fields=('emp_id', 'title'), name='unique-emp_id-title-event'),
        ),
    ]