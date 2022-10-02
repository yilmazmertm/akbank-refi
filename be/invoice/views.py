from datetime import datetime

from django.db import transaction
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny

from be.exception import is_request_valid
from be.responses import response_400, response_200
from customer.models import Customer
from invoice.models import IncomingInvoice, OutgoingInvoice
from product.models import StockProduct, ProducedProduct


@api_view(['POST'])
@permission_classes([AllowAny])
def create_incoming(request):
    should_contain_key_values = ["customerId", 'productName', 'invoiceDate', 'amount', 'productKaiForAmount']
    if not is_request_valid(request.data, should_contain_key_values):
        return response_400()

    customer_id = request.data['customerId']
    try:
        customer = Customer.objects.get(id=customer_id)
    except Exception as e:
        return response_400(data=str(e))

    product_name = request.data['productName']

    if len(product_name) < 2:
        return response_400(data="product name is too low for length")

    try:
        amount = int(request.data['amount'])
        product_kai_for_amount = int(request.data['productKaiForAmount'])
    except Exception as e:
        return response_400(data=str(e))

    try:
        str_time = request.data['invoiceDate']
        invoice_date = datetime.strptime(str_time, '%Y-%m-%dT%H:%M')
    except Exception as e:
        return response_400(data=str(e))

    with transaction.atomic():
        stock_product = StockProduct.objects.create(
            name=product_name,
            amount=amount,
            product_kai_by_amount=product_kai_for_amount,
        )
        IncomingInvoice.objects.create(
            customer=customer,
            product=stock_product,
            amount=amount,
            product_kai_by_amount=product_kai_for_amount,
            invoice_date=invoice_date
        )
    return response_200()


@api_view(['POST'])
@permission_classes([AllowAny])
def create_outgoing(request):
    should_contain_key_values = ["customerId", 'productId', 'invoiceDate', 'amount']
    if not is_request_valid(request.data, should_contain_key_values):
        return response_400()

    try:
        customer_instance = Customer.objects.get(id=request.data['customerId'])
    except Exception as e:
        return response_400(data=str(e))

    try:
        product_instance = ProducedProduct.objects.get(id=request.data['productId'])
    except Exception as e:
        return response_400(data=str(e))

    try:
        str_time = request.data['invoiceDate']
        invoice_date = datetime.strptime(str_time, '%Y-%m-%dT%H:%M')
    except Exception as e:
        return response_400(data=str(e))

    try:
        amount = int(request.data['amount'])
    except Exception as e:
        return response_400(data=str(e))

    OutgoingInvoice.objects.create(
        amount=amount,
        customer=customer_instance,
        invoice_date=invoice_date,
        product=product_instance
    )

    return response_200()
