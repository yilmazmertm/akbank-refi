from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny

from be.exception import is_request_valid
from be.responses import response_400, response_200
from customer.models import Customer
from customer.serializer import CustomerSerializer


@api_view(['POST'])
@permission_classes([AllowAny])
def create_customer(request):
    should_contain_key_values = ["customerName", 'customerKais']
    if not is_request_valid(request.data, should_contain_key_values):
        return response_400()

    customer_name = request.data['customerName'].lower()

    qs = Customer.objects.filter(name=customer_name)
    if len(qs) > 0:
        return response_400(data="already have that customer name")

    if len(customer_name) < 2:
        return response_400(data="customerName must be longer")

    Customer.objects.create(
        name=customer_name
    )

    return response_200()


@api_view(['GET'])
@permission_classes([AllowAny])
def list_customers(request):
    qs = Customer.objects.all()
    serializer = CustomerSerializer(instance=qs, many=True)
    return response_200(data=serializer.data)
