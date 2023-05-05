from django.core.serializers import serialize
from django.http import HttpResponse
from .models import *

def get_all_links(request):
    all_links = Link.objects.all()
    all_links_json = serialize('json', all_links)
    return HttpResponse(all_links_json)

def get_all_credits(request):
    all_credits = Credit.objects.all()
    all_credits_json = serialize('json', all_credits)
    return HttpResponse(all_credits_json)

def get_all_services(request):
    all_services = Service.objects.all()
    all_services_json = serialize('json', all_services)
    return HttpResponse(all_services_json)

def get_all_experiences(request):
    all_experiences = Experience.objects.all()
    all_experiences_json = serialize('json', all_experiences)
    return HttpResponse(all_experiences_json)

def get_all_dialects(request):
    all_dialects = Dialect.objects.all()
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