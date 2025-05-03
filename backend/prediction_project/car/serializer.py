from rest_framework import serializers
from .models import CarPred



class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model=CarPred
        fields="__all__"

    prediction = serializers.ReadOnlyField()