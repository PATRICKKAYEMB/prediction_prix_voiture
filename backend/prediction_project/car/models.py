from typing import Iterable
from django.shortcuts import render
from django.db import models
# Create your views here.

from sklearn.ensemble import RandomForestRegressor
import joblib
from django.core.validators import MaxValueValidator,MinValueValidator
from datetime import datetime




TRANSMISSION=(
    (0,"Manual"),
    (1,"Automatic"),
    (2,"Semi-Automatic")
)
FUEL=(
    (0,"Diesel"),
    (1,"Hybrid"),
    (2,"Electric"),
    (3,"Petrol")
)
BRAND=(
    (0,"Kia"),
    (1,"Chevrolet"),
    (2,"Mercedes"),
    (3,"Audi"),
    (4,"Volkswagen"),
    (5,"Toyota"),
    (6,"Honda"),
    (7,"BMW"),
    (8,"Hyundai"),
    (9,"Ford")
)
class CarPred(models.Model):
   
    name= models.CharField(max_length=50,null=True)
    brand=models.PositiveIntegerField (choices=BRAND ,validators=[MinValueValidator(0),MaxValueValidator(9)])
    engin_size=models.FloatField(validators=[MinValueValidator(0),MaxValueValidator(5)])
    trasmission=models.PositiveIntegerField(choices=TRANSMISSION,validators=[MinValueValidator(0),MaxValueValidator(2)])
    fuel=models.PositiveIntegerField(choices=FUEL,validators=[MinValueValidator(0),MaxValueValidator(3)])
    years=models.PositiveIntegerField(default=datetime.now().year)
    doors=models.PositiveIntegerField(validators=[MinValueValidator(1),MaxValueValidator(5)])
    mileager=models.PositiveIntegerField()
    owner=models.PositiveIntegerField(validators=[MinValueValidator(1),MaxValueValidator(5)])
    prediction=models.FloatField(blank=True,null=True)

    def save(self,*args, **kwargs):
        model=joblib.load("modele_ML/CarPrixRegression.pkl")

        self.prediction=model.predict([[self.brand,self.engin_size,self.trasmission,self.fuel,self.years,self.doors,self.mileager,self.owner]])[0]
        return super().save(*args, **kwargs)
    

# Create your models here.
