from django.urls import path

from customer.views import create_customer, list_customers

urlpatterns = [
    path('create', create_customer, name="create-customer"),
    path('list', list_customers, name="list-customers")
]
