from rest_framework import serializers
from .models import Product, FoodPairing, Cocktail

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'barcode', 'name', 'type', 'abv', 'origin', 'description', 'image']

class FoodPairingSerializer(serializers.ModelSerializer):
    product = serializers.PrimaryKeyRelatedField(
        queryset=Product.objects.all()
    )
    product_detail = ProductSerializer(source='product', read_only=True)
    

    class Meta:
        model = FoodPairing
        fields = ['id', 'product', 'product_detail', 'food_name', 'notes']

class CocktailSerializer(serializers.ModelSerializer):
    # Usa id invece di barcode per i liquori
    liquors = serializers.PrimaryKeyRelatedField(
        many=True,
        queryset=Product.objects.filter(type='liquor')
    )
    liquors_detail = ProductSerializer(source='liquors', many=True, read_only=True)

    class Meta:
        model = Cocktail
        fields = ['id', 'name', 'description', 'liquors', 'liquors_detail']
