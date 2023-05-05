from django.core.serializers import serialize
from django.http import HttpResponse
from .models import Link

def get_all_links(request):
    all_links = Link.objects.all()
    all_links_json = serialize('json', all_links)
    return HttpResponse(all_links_json)