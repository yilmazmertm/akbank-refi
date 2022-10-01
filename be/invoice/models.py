from django.db import models

from customer.models import Customer
from product.models import StockProduct, ProducedProduct


class IncomingInvoice(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    product = models.ForeignKey(StockProduct, on_delete=models.CASCADE)
    invoice_date = models.DateTimeField(blank=False, null=False)
    amount = models.PositiveIntegerField(blank=False, null=False, default=1)
    product_kai_by_amount = models.PositiveIntegerField(blank=False, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class OutgoingInvoice(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    product = models.ForeignKey(ProducedProduct, on_delete=models.CASCADE)
    invoice_date = models.DateTimeField(blank=False, null=False)
    amount = models.PositiveIntegerField(blank=False, null=False, default=1)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
