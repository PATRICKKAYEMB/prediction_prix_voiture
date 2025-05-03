from django.urls import path


from .views import carprixApi


urlpatterns = [
    path("prix/", carprixApi, name="carprixApi"),
    path("prix/<int:id>/",carprixApi),
]
