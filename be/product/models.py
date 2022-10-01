from django.db import models
from django.utils.crypto import get_random_string

from employee.models import Employee


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
    used_resource_one = models.ForeignKey(StockProduct, on_delete=models.CASCADE, related_name='used_resource_one_id')
    used_resource_one_amount = models.PositiveIntegerField(blank=False, null=False)
    used_resource_two = models.ForeignKey(StockProduct, on_delete=models.CASCADE, related_name='used_resource_two_id')
    used_resource_two_amount = models.PositiveIntegerField(blank=False, null=False)
    used_employee_one = models.ForeignKey(Employee, on_delete=models.CASCADE, related_name='used_human_one_id')
    used_employee_one_amount = models.PositiveIntegerField(blank=False, null=False)
    used_employee_two = models.ForeignKey(Employee, on_delete=models.CASCADE, related_name='used_human_two_id')
    used_employee_two_amount = models.PositiveIntegerField(blank=False, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
