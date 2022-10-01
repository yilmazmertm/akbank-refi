from django.urls import path

from invoice.views import create_incoming

urlpatterns = [
    path('create-incoming', create_incoming, name="create-incoming")
]
