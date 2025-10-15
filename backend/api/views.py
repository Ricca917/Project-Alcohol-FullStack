from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action

from .models import Product, FoodPairing, Cocktail
from .serializers import ProductSerializer, FoodPairingSerializer, CocktailSerializer

class ProductViewSet(viewsets.ModelViewSet):    
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    
    def get_queryset(self):
        queryset = super().get_queryset()
        barcode = self.request.query_params.get('barcode')  # legge il barcode dalla query
        if barcode:
            queryset = queryset.filter(barcode=barcode)
        return queryset

    @action(detail=True, methods=['get'])
    def food_pairings(self, request, pk=None): 
        product = self.get_object()
        pairings = product.food_pairings.all()
        serializer = FoodPairingSerializer(pairings, many=True) 
        return Response(serializer.data)    

    @action(detail=True, methods=['get'])
    def cocktails(self, request, pk=None):
        product = self.get_object()
        cocktails = product.cocktails.all()  
        serializer = CocktailSerializer(cocktails, many=True)
        return Response(serializer.data)

class FoodPairingViewSet(viewsets.ModelViewSet):
    queryset = FoodPairing.objects.all()
    serializer_class = FoodPairingSerializer

class CocktailViewSet(viewsets.ModelViewSet):
    queryset = Cocktail.objects.all()
    serializer_class = CocktailSerializer
