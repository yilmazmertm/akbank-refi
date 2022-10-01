from django.urls import path

from invoice.views import create_incoming, create_outgoing

urlpatterns = [
    path('create-incoming', create_incoming, name="create-incoming"),
    path('create-outgoing', create_outgoing, name="create-outgoing")
]
