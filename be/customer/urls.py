from django.urls import path

from customer.views import create_customer

urlpatterns = [
    path('create', create_customer, name="create-customer")
]
