import os

from bravado.exception import HTTPError
from django.contrib import messages
from django.contrib.auth.decorators import login_required, permission_required, user_passes_test
from django.core.exceptions import PermissionDenied
from django.db import IntegrityError
from django.db.models import Count, F, Sum
from django.shortcuts import render, redirect, get_object_or_404
from django.utils.translation import ugettext_lazy as _
from esi.decorators import token_required
from allianceauth.eveonline.models import EveCharacter, EveCorporationInfo
from django.http import HttpResponse
import csv
import re

from ..models import *

@login_required
def assets(request, character_id=None):
    # get available models

    if character_id is None:
        character_id = request.user.profile.main_character.character_id
        character_ids = CharacterAudit.objects.get(character__character_id=character_id).character.character_ownership.user.character_ownerships.all().values_list('character__character_id', flat=True)
    else:
        character_ids = [character_id]
    
    capital_groups = [30, 547, 659, 1538, 485, 902, 513, 944, 941]
    subcap_cat = [6]
    noteable_cats = [4, 20, 23, 25, 34, 35, 87, 91]
    structure_cats = [22, 24, 40, 41, 46, 65, 66,]
    bpo_cats = [9]

    assets = CharacterAsset.objects\
                .filter(character__character__character_id__in=character_ids)\
                .values('type_name__group__group_id')\
                .annotate(grp_total=Sum('quantity'))\
                .annotate(grp_name=F('type_name__group__name'))\
                .annotate(grp_id=F('type_name__group_id'))\
                .annotate(cat_id=F('type_name__group__category_id'))\
                .order_by('-grp_total')
    
    capital_asset_groups = []
    subcap_asset_groups = []
    noteable_asset_groups = []
    structure_asset_groups = []
    bpo_asset_groups = []
    remaining_asset_groups = []

    for grp in assets:
        if grp['grp_id'] in capital_groups:
            capital_asset_groups.append(grp)
        elif grp['cat_id'] in subcap_cat:
            subcap_asset_groups.append(grp)
        elif grp['cat_id'] in noteable_cats:
            noteable_asset_groups.append(grp)
        elif grp['cat_id'] in structure_cats:
            structure_asset_groups.append(grp)
        elif grp['cat_id'] in bpo_cats:
            bpo_asset_groups.append(grp)
        else:
            remaining_asset_groups.append(grp)
        
    context = {
        "capital_asset_groups": capital_asset_groups,
        "noteable_asset_groups": noteable_asset_groups,
        "subcap_asset_groups": subcap_asset_groups,
        "structure_asset_groups": structure_asset_groups,
        "bpo_asset_groups": bpo_asset_groups,
        "remaining_asset_groups": remaining_asset_groups
    }

    return render(request, 'corptools/character/assets.html', context=context)