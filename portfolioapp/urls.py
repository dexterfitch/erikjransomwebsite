from django.urls import path
from . import views

urlpatterns = [
    path('links/', views.get_all_links),
    path('credits/', views.get_all_credits),
    path('services/', views.get_all_services),
    path('experiences/', views.get_all_experiences),
    path('dialects/', views.get_all_dialects),
    path('languages/', views.get_all_languages),
    path('equipment_techs/', views.get_all_equipment_techs),
    path('credits_categories/', views.get_all_credits_categories),
    path('credits_by_category/<int:category_id>/', views.get_credits_by_category),
    path('equipments_by_equipment_tech/<int:equipment_tech_id>/', views.get_equipments_by_equipment_tech),
]