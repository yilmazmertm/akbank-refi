from django.db import models


class Customer(models.Model):
    name = models.CharField(max_length=255, blank=False, null=False)
    customer_kais = models.PositiveIntegerField(blank=False, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
