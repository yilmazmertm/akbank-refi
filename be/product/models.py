from django.db import models
from django.utils.crypto import get_random_string


def generate_product_code():
    return get_random_string(length=3,
                             allowed_chars="ABCDEFGHJKLMNPRST") + get_random_string(length=3,
                                                                                    allowed_chars="123456789")


class StockProduct(models.Model):
    code = models.CharField(default=generate_product_code, blank=False, null=False, max_length=6)
    name = models.TextField(blank=False, null=False)
    amount = models.PositiveIntegerField(blank=False, null=False, default=1)
    product_kai_by_amount = models.PositiveIntegerField(blank=False, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class ProducedProduct(models.Model):
    code = models.CharField(default=generate_product_code, blank=False, null=False, max_length=6)
    name = models.TextField(blank=False, null=False)
    amount = models.PositiveIntegerField(blank=False, null=False, default=1)
    product_kai_by_amount = models.PositiveIntegerField(blank=False, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
