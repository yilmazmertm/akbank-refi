from django.contrib import admin

from product.models import StockProduct, ProducedProduct


@admin.register(StockProduct)
class StockProductAdmin(admin.ModelAdmin):
    list_display = ('code', 'name', 'amount', 'product_kai_by_amount', 'created_at')


@admin.register(ProducedProduct)
class ProducedProductAdmin(admin.ModelAdmin):
    list_display = ('code', 'name', 'amount', 'product_kai_by_amount', 'created_at')
