# Generated by Django 3.1.1 on 2021-04-27 07:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('eveonline', '0014_auto_20210105_1413'),
        ('corptools', '0045_bigkey_assets_fix'),
    ]

    operations = [
        migrations.AddField(
            model_name='characteraudit',
            name='cache_expire_orders',
            field=models.DateTimeField(blank=True, default=None, null=True),
        ),
        migrations.AddField(
            model_name='characteraudit',
            name='last_update_orders',
            field=models.DateTimeField(blank=True, default=None, null=True),
        ),
        migrations.CreateModel(
            name='Rolefilter',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=500)),
                ('description', models.CharField(max_length=500)),
                ('has_director', models.BooleanField(default=False)),
                ('has_accountant', models.BooleanField(default=False)),
                ('has_station_manager', models.BooleanField(default=False)),
                ('has_personnel_manager', models.BooleanField(default=False)),
                ('alliance_filter', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='audit_role_filter', to='eveonline.eveallianceinfo')),
                ('corp_filter', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='audit_role_filter', to='eveonline.evecorporationinfo')),
            ],
            options={
                'verbose_name': 'Smart Filter: Corporate Role checks',
                'verbose_name_plural': 'Smart Filter: Corporate Role checks',
            },
        ),
    ]