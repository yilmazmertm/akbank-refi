from rest_framework import serializers

from product.models import StockProduct, ProducedProduct


class StockProductSerializer(serializers.ModelSerializer):
    product_kai_sum = serializers.SerializerMethodField()

    class Meta:
        model = StockProduct
        fields = ('id', 'code', 'name', 'amount', 'product_kai_by_amount', 'product_kai_sum')

    @staticmethod
    def get_product_kai_sum(obj):
        return obj.amount * obj.product_kai_by_amount


class ProducedProductSerializer(serializers.ModelSerializer):
    product_kai_by_amount = serializers.SerializerMethodField()

    class Meta:
        model = ProducedProduct
        fields = ('id', 'code', 'name', 'amount', 'product_kai_by_amount')

    @staticmethod
    def get_product_kai_by_amount(obj):
        kai_first = obj.used_resource_one.product_kai_by_amount
        kai_second = obj.used_resource_two.product_kai_by_amount

        employee_kai_first = obj.used_employee_one.kai_for_employee
        employee_kai_second = obj.used_employee_two.kai_for_employee

        return kai_first + kai_second + employee_kai_first + employee_kai_second
