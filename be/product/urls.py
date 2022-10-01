from django.urls import path

from product.views import create_product, list_stock_products, list_produced_products

urlpatterns = [
    path('create', create_product, name="create-product"),
    path('list-stock-products', list_stock_products, name="list-stock-products"),
    path('list-produced-products', list_produced_products, name="list-produced-products")
]
