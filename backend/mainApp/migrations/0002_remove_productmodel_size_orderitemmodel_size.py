# Generated by Django 4.1.2 on 2022-10-29 08:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainApp', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='productmodel',
            name='size',
        ),
        migrations.AddField(
            model_name='orderitemmodel',
            name='size',
            field=models.CharField(choices=[('S', 'S'), ('M', 'M'), ('L', 'L'), ('XL', 'XL')], max_length=2, null=True),
        ),
    ]
