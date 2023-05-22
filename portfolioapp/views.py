from django.core.serializers import serialize
from django.http import HttpResponse
from itertools import chain
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

def get_acting_services(request):
    acting_services = Service.objects.filter(acting=True)
    acting_services_json = serialize('json', acting_services)
    return HttpResponse(acting_services_json)

def get_writing_services(request):
    writing_services = Service.objects.filter(writing=True)
    writing_services_json = serialize('json', writing_services)
    return HttpResponse(writing_services_json)

def get_all_experiences(request):
    all_experiences = Experience.objects.all()
    all_experiences_json = serialize('json', all_experiences)
    return HttpResponse(all_experiences_json)

def get_actor_experiences(request):
    actor_experiences = Experience.objects.filter(acting=True)
    actor_experiencess_json = serialize('json', actor_experiences)
    return HttpResponse(actor_experiencess_json)

def get_writer_experiences(request):
    writer_experiences = Experience.objects.filter(writing=True)
    writer_experiences_json = serialize('json', writer_experiences)
    return HttpResponse(writer_experiences_json)

def get_all_dialects(request):
    all_dialects = Dialect.objects.order_by("name")
    all_dialects_json = serialize('json', all_dialects)
    return HttpResponse(all_dialects_json)

def get_all_languages(request):
    all_languages = Language.objects.all()
    all_languages_json = serialize('json', all_languages)
    return HttpResponse(all_languages_json)

def get_all_equipment_techs(request):
    all_equipment_techs = EquipmentTech.objects.all().order_by("name")
    all_equipment_techs_json = serialize('json', all_equipment_techs)
    return HttpResponse(all_equipment_techs_json)

def get_microphones_equipment_techs(request):
    microphones_default = Equipment.objects.filter(tech=1, default=True).order_by("name")
    microphones_rest = Equipment.objects.filter(tech=1, default=False).order_by("name")
    microphones = list(chain(microphones_default, microphones_rest))
    microphones_json = serialize('json', microphones)
    return HttpResponse(microphones_json)

def get_audiointerfaces_equipment_techs(request):
    audiointerfaces_default = Equipment.objects.filter(tech=2, default=True).order_by("name")
    audiointerfaces_rest = Equipment.objects.filter(tech=2, default=False).order_by("name")
    audiointerfaces = list(chain(audiointerfaces_default, audiointerfaces_rest))
    audiointerfaces_json = serialize('json', audiointerfaces)
    return HttpResponse(audiointerfaces_json)

def get_computers_equipment_techs(request):
    computers_default = Equipment.objects.filter(tech=3, default=True).order_by("name")
    computers_rest = Equipment.objects.filter(tech=3, default=False).order_by("name")
    computers = list(chain(computers_default, computers_rest))
    computers_json = serialize('json', computers)
    return HttpResponse(computers_json)

def get_daws_equipment_techs(request):
    daws_default = Equipment.objects.filter(tech=4, default=True).order_by("name")
    daws_rest = Equipment.objects.filter(tech=4, default=False).order_by("name")
    daws = list(chain(daws_default, daws_rest))
    daws_json = serialize('json', daws)
    return HttpResponse(daws_json)

def get_booth_equipment_techs(request):
    booth_default = Equipment.objects.filter(tech=5, default=True).order_by("name")
    booth_rest = Equipment.objects.filter(tech=5, default=False).order_by("name")
    booth = list(chain(booth_default, booth_rest))
    booth_json = serialize('json', booth)
    return HttpResponse(booth_json)

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