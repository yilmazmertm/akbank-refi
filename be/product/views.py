from django.db import transaction
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny

from be import settings
from be.exception import is_request_valid
from be.responses import response_400, response_200, response_500
from employee.models import Employee
from product.models import StockProduct, ProducedProduct
from product.serializers import StockProductSerializer, ProducedProductSerializer
from utils.calculators import calculate_for_one_product
from utils.connect_w3 import connect_w3_instance
from utils.metadata_helpers import create_metadata_return_hash


@api_view(['POST'])
@permission_classes([AllowAny])
def create_product(request):
    should_contain_key_values = ["resourceOneId", 'resourceOneAmount', 'resourceTwoId', 'resourceTwoAmount',
                                 'employeeOneId', 'employeeOneAmount', 'employeeTwoId', 'employeeTwoAmount',
                                 'producedProductAmount', 'productName']
    if not is_request_valid(request.data, should_contain_key_values):
        return response_400()

    product_name = request.data['productName']

    resource_one_id = request.data['resourceOneId']
    resource_two_id = request.data['resourceTwoId']
    resource_one_amount = request.data['resourceOneAmount']
    resource_two_amount = request.data['resourceTwoAmount']
    employee_one_id = request.data['employeeOneId']
    employee_two_id = request.data['employeeTwoId']
    employee_one_amount = request.data['employeeOneAmount']
    employee_two_amount = request.data['employeeTwoAmount']

    try:
        resource_one_instance = StockProduct.objects.get(id=resource_one_id)
        resource_two_instance = StockProduct.objects.get(id=resource_two_id)
    except Exception as e:
        return response_400(data=str(e))

    try:
        resource_one_amount = int(resource_one_amount)
        resource_two_amount = int(resource_two_amount)
        produced_product_amount = int(request.data['producedProductAmount'])
    except Exception as e:
        return response_400(data=str(e))

    try:
        employee_one_instance = Employee.objects.all()[0]
        employee_two_instance = Employee.objects.all()[1]
    except Exception as e:
        return response_400(data=str(e))
    with transaction.atomic():
        produced_product = ProducedProduct.objects.create(
            name=product_name,
            amount=produced_product_amount,
            used_resource_one=resource_one_instance,
            used_resource_two=resource_two_instance,
            used_resource_one_amount=resource_one_amount,
            used_resource_two_amount=resource_two_amount,
            used_employee_one=employee_one_instance,
            used_employee_two=employee_two_instance,
            used_employee_one_amount=employee_one_amount,
            used_employee_two_amount=employee_two_amount
        )
        metadata_hash = create_metadata_return_hash(produced_product)
        produced_product.metadata_hash = metadata_hash
        produced_product.save()
        w3 = connect_w3_instance(settings.PROVIDER_URL)
        tx = {
            'chainId': 43113,
            'nonce': w3.eth.getTransactionCount(settings.FROM_ACCOUNT),
            'to': settings.TO_ACCOUNT,
            'value': w3.toWei(0.0000000001, 'ether'),
            'data': metadata_hash,
            'gas': 200000,
            'gasPrice': w3.toWei('50', 'gwei')
        }
        signed_tx = w3.eth.account.sign_transaction(tx, settings.PRIVATE_KEY)
        tx_hash = w3.eth.sendRawTransaction(signed_tx.rawTransaction)
        real_hash = w3.toHex(tx_hash)
        produced_product.tx_hash = real_hash
        produced_product.save()
    return response_200()


@api_view(['GET'])
@permission_classes([AllowAny])
def list_stock_products(request):
    qs = StockProduct.objects.all()
    serializer = StockProductSerializer(instance=qs, many=True)
    return response_200(data=serializer.data)


@api_view(['GET'])
@permission_classes([AllowAny])
def list_produced_products(request):
    qs = ProducedProduct.objects.all()
    serializer = ProducedProductSerializer(instance=qs, many=True)
    return response_200(data=serializer.data)


@api_view(['POST'])
@permission_classes([AllowAny])
def serve_product(request):
    should_contain_key_values = ["code"]
    if not is_request_valid(request.data, should_contain_key_values):
        return response_400()
    code = request.data['code']
    try:
        produced_product = ProducedProduct.objects.get(code=code)
    except Exception as e:
        return response_500(error_code=1)

    return_obj = {
        "link": "https://testnet.snowtrace.io/tx/" + produced_product.tx_hash,
        "producedProduct": ProducedProductSerializer(instance=produced_product, many=False).data,
        "stockProductOne": StockProductSerializer(instance=produced_product.used_resource_one, many=False).data,
        "stockProductOneNumber": produced_product.used_resource_one_amount,
        "stockProductTwoNumber": produced_product.used_resource_two_amount,
        "stockProductTwo": StockProductSerializer(instance=produced_product.used_resource_two, many=False).data
    }

    return response_200(return_obj)


@api_view(['GET'])
@permission_classes([AllowAny])
def create_graph(request):
    x = {
        1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0,
        10: 0, 11: 0, 12: 0,
    }
    products = ProducedProduct.objects.all()
    for product in products:
        month_id = product.created_at.month
        x[month_id] += calculate_for_one_product(product)

    y = []
    y.append({
        "name": "Ocak",
        "uv": x[1]
    })
    y.append({
        "name": "Şubat",
        "uv": x[2]
    })
    y.append({
        "name": "Mart",
        "uv": x[3]
    })
    y.append({
        "name": "Nisan",
        "uv": x[4]
    })
    y.append({
        "name": "Mayıs",
        "uv": x[5]
    })
    y.append({
        "name": "Haziran",
        "uv": x[6]
    })
    y.append({
        "name": "Temmuz",
        "uv": x[7]
    })
    y.append({
        "name": "Ağustos",
        "uv": x[8]
    })
    y.append({
        "name": "Eylül",
        "uv": x[9]
    })
    y.append({
        "name": "Ekim",
        "uv": x[10]
    })
    y.append({
        "name": "Kasım",
        "uv": x[11]
    })
    y.append({
        "name": "Aralık",
        "uv": x[12]
    })
    return response_200(data=y)
