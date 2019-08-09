from .models import Libro
from .serializer import LibroSerializer
from rest_framework import viewsets

#crud sobre el objeto
class LibroViewSet(viewsets.ModelViewSet):
    querySet = Libro.objects.all()
    serializer_class = LibroSerializer
    