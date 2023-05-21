from django.core.serializers import serialize
from django.http import HttpResponse
from .models import *

def get_all_links(request):
    all_links = Link.objects.order_by("text")
    all_links_json = serialize('json', all_links)
    return HttpResponse(all_links_json)

def get_all_credits(request):
    all_credits = Credit.objects.order_by("title")
    all_credits_json = serialize('json', all_credits)
    return HttpResponse(all_credits_json)

def get_readingsconcerts_credits(request):
    readingsconcerts = Credit.objects.filter(category=5).order_by("title")
    readingsconcerts_json = serialize('json', readingsconcerts)
    return HttpResponse(readingsconcerts_json)

def get_fullproductions_credits(request):
    fullproductions = Credit.objects.filter(category=4).order_by("title")
    fullproductions_json = serialize('json', fullproductions)
    return HttpResponse(fullproductions_json)

def get_playsmusicals_credits(request):
    playsmusicals = Credit.objects.filter(category=3).order_by("title")
    playsmusicals_json = serialize('json', playsmusicals)
    return HttpResponse(playsmusicals_json)

def get_filmtelevision_credits(request):
    filmtelevision = Credit.objects.filter(category=2).order_by("title")
    filmtelevision_json = serialize('json', filmtelevision)
    return HttpResponse(filmtelevision_json)

def get_voiceover_credits(request):
    voiceover = Credit.objects.filter(category=1).order_by("title")
    voiceover_json = serialize('json', voiceover)
    return HttpResponse(voiceover_json)

def get_all_services(request):
    all_services = Service.objects.all()
    all_services_json = serialize('json', all_services)
    return HttpResponse(all_services_json)

def get_all_experiences(request):
    all_experiences = Experience.objects.all()
    all_experiences_json = serialize('json', all_experiences)
    return HttpResponse(all_experiences_json)

def get_all_dialects(request):
    all_dialects = Dialect.objects.order_by("name")
    all_dialects_json = serialize('json', all_dialects)
    return HttpResponse(all_dialects_json)

def get_all_languages(request):
    all_languages = Language.objects.all()
    all_languages_json = serialize('json', all_languages)
    return HttpResponse(all_languages_json)

def get_all_equipment_techs(request):
    all_equipment_techs = EquipmentTech.objects.all()
    all_equipment_techs_json = serialize('json', all_equipment_techs)
    return HttpResponse(all_equipment_techs_json)

def get_all_credits_categories(request):
    all_credits_categories = CreditsCategory.objects.all()
    all_credits_categories_json = serialize('json', all_credits_categories)
    return HttpResponse(all_credits_categories_json)

def get_credits_by_category(request, category_id):
    all_credits = Credit.objects.filter(category=category_id)
    all_credits_json = serialize('json', all_credits)
    return HttpResponse(all_credits_json)

def get_equipments_by_equipment_tech(request, equipment_tech_id):
    all_equipments = Equipment.objects.filter(equipment_tech=equipment_tech_id)
    all_equipments_json = serialize('json', all_equipments)
    return HttpResponse(all_equipments_json)