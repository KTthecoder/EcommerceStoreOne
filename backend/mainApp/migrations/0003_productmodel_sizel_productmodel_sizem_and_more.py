# Generated by Django 4.1.2 on 2022-10-29 11:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainApp', '0002_remove_productmodel_size_orderitemmodel_size'),
    ]

    operations = [
        migrations.AddField(
            model_name='productmodel',
            name='sizeL',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='productmodel',
            name='sizeM',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='productmodel',
            name='sizeS',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='productmodel',
            name='sizeXL',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
    ]