from rest_framework import routers
from .viewsets import LibroViewSet

#define la ruta para el modelo, post-get-put
router = routers.SimpleRouter()
router.register('libros', LibroViewSet)

urlpatterns = router.urls