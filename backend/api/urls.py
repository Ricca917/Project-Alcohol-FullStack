from rest_framework import routers
from api.views import ProductViewSet, FoodPairingViewSet, CocktailViewSet


router = routers.DefaultRouter() # Create un router e lo configura automaticamente
router.register(r'products', ProductViewSet, basename='product') # Crea le rotte per il viewset relativo ai prodotti
router.register(r'food-pairings', FoodPairingViewSet, basename='foodpairing') # Crea le rotte per il viewset relativo agli abbinamenti cibo-vino
router.register(r'cocktails', CocktailViewSet, basename='cocktail') # Crea le rotte per il viewset relativo ai cocktail

urlpatterns = router.urls  # Espone le rotte create dal router