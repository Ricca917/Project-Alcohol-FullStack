from django.db import models

# Create your models here.

class Product(models.Model):  # model per i prodotti alcolici
    PRODUCT_TYPES = [
        ('vino', 'Vino'),
        ('birra', 'Birra'),
        ('liquore', 'Liquore'),
    ]

    name = models.CharField(max_length=100)
    barcode = models.CharField(max_length=13, unique=True)  # barcode EAN-13 unico del prodotto
    type = models.CharField(max_length=10, choices=PRODUCT_TYPES)  # tipo di prodotto fra i 3 possibili
    description = models.TextField(blank=True)  # descrizione del prodotto
    origin = models.CharField(max_length=50, blank=True) # provenienza del prodotto
    abv = models.CharField(max_length=10, blank=True)  # gradazione alcolica (es. 13.5%)
    image = models.URLField(blank=True)  # URL dell'immagine del prodotto

    def __str__(self):
        return f"{self.name} ({self.get_type_display()})" # mostra il nome e il tipo di prodotto


class FoodPairing(models.Model):  # model per gli abbinamenti cibo-prodotto
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='food_pairings')
    food_name = models.CharField(max_length=100)
    notes = models.TextField(blank=True)

    def __str__(self):
        return f"{self.food_name} ↔ {self.product.name}"


class Cocktail(models.Model):  # model per i cocktail
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    liquors = models.ManyToManyField(Product, related_name='cocktails')

    def __str__(self):
        return self.name
