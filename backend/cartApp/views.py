from mainApp.serializers import OrderItemSerializer
from mainApp.models import *
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

# Create order if not exists and show products if there are any in a cart
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def CartPage(request):
    if request.method == 'GET':
        if request.user.is_authenticated:
            user = request.user
            order, created = OrderModel.objects.get_or_create(user = user, ordered = False)
            orderItems = OrderItemModel.objects.filter(order = order)

            if not orderItems.exists():
                data = {'Response' : 'Your Shopping Cart is Empty'}
                return Response(data, status=status.HTTP_200_OK)

            orderItemSerializer = OrderItemSerializer(orderItems, many = True)
            return Response(orderItemSerializer.data, status=status.HTTP_200_OK)
        else:
            data = {'Error' : 'User is not authenticated'}
            return Response(data, status=status.HTTP_401_UNAUTHORIZED)
    else:
        data = {'Error' : 'Bad Request'}
        return Response(data, status=status.HTTP_400_BAD_REQUEST)



