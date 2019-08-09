from rest_framework import serializers
from .models import Libro


#nos permitira transportar nuestros objectos atravez de la red, json-xml
class LibroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Libro
        fields = '__all__'