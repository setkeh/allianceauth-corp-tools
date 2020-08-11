# Generated by Django 2.2.12 on 2020-08-11 04:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('corptools', '0024_auto_20200810_1458'),
    ]

    operations = [
        migrations.CreateModel(
            name='MapJumpBridge',
            fields=[
                ('structure_id', models.IntegerField(primary_key=True, serialize=False)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('from_solar_system', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='bridge_from_system', to='corptools.MapSystem')),
                ('owner', models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='corptools.EveName')),
                ('to_solar_system', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='bridge_to_system', to='corptools.MapSystem')),
            ],
        ),
    ]
