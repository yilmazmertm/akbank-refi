# Generated by Django 3.2 on 2022-10-01 11:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0002_auto_20221001_1035'),
    ]

    operations = [
        migrations.RenameField(
            model_name='producedproduct',
            old_name='used_human_one',
            new_name='used_employee_one',
        ),
        migrations.RenameField(
            model_name='producedproduct',
            old_name='used_human_one_amount',
            new_name='used_employee_one_amount',
        ),
        migrations.RenameField(
            model_name='producedproduct',
            old_name='used_human_two',
            new_name='used_employee_two',
        ),
        migrations.RenameField(
            model_name='producedproduct',
            old_name='used_human_two_amount',
            new_name='used_employee_two_amount',
        ),
    ]
