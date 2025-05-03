from django import views
from django.shortcuts import get_object_or_404
from .serializer import CarSerializer
from .models import CarPred
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view


@api_view(["GET","POST","DELETE"])

def carprixApi(request,id=None):
    if request.method=="GET":

        car=CarPred.objects.all()

        serialiser=CarSerializer(car,many=True)

        return Response(serialiser.data,status=status.HTTP_200_OK)
    

    if request.method=="POST":

        data=request.data

        serialiser=CarSerializer(data=data)

        if serialiser.is_valid():
            serialiser.save()
            return Response(serialiser.data,status=status.HTTP_200_OK)
        else:
           return Response(serialiser.errors,status=status.HTTP_400_BAD_REQUEST)
    if request.method=="DELETE":

        car= get_object_or_404(CarPred,id=id)
        car.delete()
        return Response({"message":"suppression avec succes"},status=status.HTTP_200_OK)
    
    return Response({"message":"impossible de faire l'action"},status=status.HTTP_400_BAD_REQUEST)

