from django.contrib import admin
from .models import Product, FoodPairing, Cocktail
# Register your models here.

class ProductAdmin(admin.ModelAdmin): # Configurazione dell'interfaccia di amministrazione per il modello Product
    list_display = ('name', 'type', 'barcode', 'abv', 'origin')
    search_fields = ('name', 'barcode', 'type')

admin.site.register(Product, ProductAdmin) # Registra il modello Product con la configurazione personalizzata


admin.site.register(FoodPairing) # Registra il modello FoodPairing con la configurazione di default
admin.site.register(Cocktail) # Registra il modello Cocktail con la configurazione di default

