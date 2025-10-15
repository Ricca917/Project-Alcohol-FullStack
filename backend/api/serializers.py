from rest_framework import serializers
from .models import Product, FoodPairing, Cocktail

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['barcode', 'name', 'type', 'abv', 'origin', 'description', 'image']


class FoodPairingSerializer(serializers.ModelSerializer):
    product = serializers.SlugRelatedField(
        slug_field='barcode',
        queryset=Product.objects.all()
    )
    product_detail = ProductSerializer(source='product', read_only=True)

    class Meta:
        model = FoodPairing
        fields = ['id', 'product', 'product_detail', 'food_name', 'notes']


class CocktailSerializer(serializers.ModelSerializer):
    liquors = serializers.SlugRelatedField(
        many=True,
        slug_field='barcode',
        queryset=Product.objects.filter(type='liquor')
    )
    liquors_detail = ProductSerializer(source='liquors', many=True, read_only=True)

    class Meta:
        model = Cocktail
        fields = ['id', 'name', 'description', 'liquors', 'liquors_detail']
