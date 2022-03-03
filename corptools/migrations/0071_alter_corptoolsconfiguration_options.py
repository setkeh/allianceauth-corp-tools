# Generated by Django 4.0.2 on 2022-03-03 09:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('corptools', '0070_create_settings'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='corptoolsconfiguration',
            options={'default_permissions': [], 'permissions': (('holding_corp_structures', 'Can access configured holding corp structure data.'), (
                'holding_corp_wallets', 'Can access configured holding corp wallet data.'), ('holding_corp_assets', 'Can access configured holding corp asset data.'))},
        ),
    ]
