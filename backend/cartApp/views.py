from mainApp.serializers import OrderItemSerializer, ShippingAddressSerializer, OrderPaymentSerializer, OrderQuantitySerializer, SmallOrderSerializer
from mainApp.models import *
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

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
        data = {'Error' : 'Method not allowed'}
        return Response(data, status=status.HTTP_405_METHOD_NOT_ALLOWED)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def AddProduct(request, productId, size):
    if request.method == 'POST':
        if request.user.is_authenticated:
            try:
                product = ProductModel.objects.get(id = productId)
            except ProductModel.DoesNotExist:
                data = {'Error' : 'Product Does Not Exists'}
                return Response(data)

            user = request.user
            order, created = OrderModel.objects.get_or_create(user=user, ordered=False) 

            orderItem, created = OrderItemModel.objects.get_or_create(product=product, order=order, size=size)
            orderItem.quantity = (orderItem.quantity + 1)
            orderItem.save()

            data = {'Response' : 'Product Added Successfully'}
            return Response(data, status=status.HTTP_201_CREATED)
        else:
            data = {'Error' : 'User is not authenticated'}
            return Response(data, status=status.HTTP_401_UNAUTHORIZED)
    else:
        data = {'Error' : 'Bad Request'}
        return Response(data, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def RemoveProduct(request, orderItemId):
    if request.method == 'POST':
        if request.user.is_authenticated:
            try:
                orderItem = OrderItemModel.objects.get(id = orderItemId)
            except OrderItemModel.DoesNotExist:
                data = {'Error' : 'OrderItem Does Not Exists'}
                return Response(data)

            orderItem.quantity = (orderItem.quantity - 1)
            orderItem.save()

            if orderItem.quantity <= 0:
                orderItem.delete()

            data = {'Response' : 'Product Deleted Succesfully'}
            return Response(data, status=status.HTTP_200_OK)
        else:
            data = {}
            data['response'] = "User is not authenticated"
            return Response(data)
    else:
        data = {'Error' : 'Bad Request'}
        return Response(data, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def AddShippingAddress(request):
    if request.method == 'POST':
        if request.user.is_authenticated:
            shippingSerializer = ShippingAddressSerializer(data = request.data)
            if shippingSerializer.is_valid():
                shippingSerializer.save()
                data = {'Response' : 'Shipping Address Added Succesfully'}
                return Response(data, status=status.HTTP_201_CREATED)
            else:
                data = {'Error' : 'Shipping Address Is Not Valid'}
                return Response(data, status=status.HTTP_200_OK)
        else:
            data = {}
            data['response'] = "User is not authenticated"
            return Response(data)
    else:
        data = {'Error' : 'Bad Request'}
        return Response(data, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def ShowShippingAddress(request):
    if request.method == 'GET':
        if request.user.is_authenticated:
            user = request.user
            order, created = OrderModel.objects.get_or_create(user=user, ordered=False) 
            shipping = ShippingAddressModel.objects.get(order = order)

            shippingserializer = ShippingAddressSerializer(shipping)

            return Response(shippingserializer.data, status=status.HTTP_200_OK)
        else:
            data = {}
            data['response'] = "User is not authenticated"
            return Response(data)
    else:
        data = {'Error' : 'Bad Request'}
        return Response(data, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def ShippingAddressExists(request):
    if request.method == 'GET':
        if request.user.is_authenticated:
            user = request.user
            order, created = OrderModel.objects.get_or_create(user=user, ordered=False) 
            try:
                shipping = ShippingAddressModel.objects.get(order = order)
                data = {'Response' : 'Shipping Address Exists'}
                return Response(data, status=status.HTTP_200_OK)

            except ShippingAddressModel.DoesNotExist:
                data = {'Response' : 'Shipping Address Does Not Exists'}
                return Response(data, status=status.HTTP_200_OK)
        else:
            data = {}
            data['response'] = "User is not authenticated"
            return Response(data)
    else:
        data = {'Error' : 'Bad Request'}
        return Response(data, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT'])
@permission_classes([IsAuthenticated])
def ShippingAddressEdit(request):
    if request.method == 'GET':
        if request.user.is_authenticated:
            user = request.user
            order, created = OrderModel.objects.get_or_create(user=user, ordered=False) 
            try:
                shipping = ShippingAddressModel.objects.get(order = order)
                shippingSerializer = ShippingAddressSerializer(shipping)
                return Response(shippingSerializer.data, status=status.HTTP_200_OK)

            except ShippingAddressModel.DoesNotExist:
                data = {'Response' : 'Shipping Address Does Not Exists'}
                return Response(data, status=status.HTTP_200_OK)
        else:
            data = {}
            data['response'] = "User is not authenticated"
            return Response(data)
    elif request.method == 'PUT':
        if request.user.is_authenticated:
            user = request.user
            order, created = OrderModel.objects.get_or_create(user=user, ordered=False) 
            try:
                shipping = ShippingAddressModel.objects.get(order = order)
                shippingSerializer = ShippingAddressSerializer(data=request.data, instance=shipping)
                if shippingSerializer.is_valid():
                    shippingSerializer.save()
                    data = {'Response' : 'Shipping Address Exists'}
                    return Response(shippingSerializer.data, status=status.HTTP_200_OK)

            except ShippingAddressModel.DoesNotExist:
                data = {'Response' : 'Shipping Address Does Not Exists'}
                return Response(data, status=status.HTTP_200_OK)
        else:
            data = {}
            data['response'] = "User is not authenticated"
            return Response(data)
    else:
        data = {'Error' : 'Bad Request'}
        return Response(data, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def PaymentPage(request):
    if request.method == 'GET':
        if request.user.is_authenticated:
            user = request.user
            order, created = OrderModel.objects.get_or_create(user=user, ordered=False) 
            orderSerializer = OrderPaymentSerializer(order)

            return Response(orderSerializer.data, status=status.HTTP_200_OK)
        else:
            data = {}
            data['response'] = "User is not authenticated"
            return Response(data)
    else:
        data = {'Error' : 'Bad Request'}
        return Response(data, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def ProfileOrders(request):
    if request.method == 'GET':
        if request.user.is_authenticated:
            user = request.user
            order = OrderModel.objects.filter(user=user, ordered=True) 
            orderSerializer = SmallOrderSerializer(order, many = True)

            return Response(orderSerializer.data, status=status.HTTP_200_OK)
        else:
            data = {}
            data['response'] = "User is not authenticated"
            return Response(data)
    else:
        data = {'Error' : 'Bad Request'}
        return Response(data, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def OrderById(request, id):
    if request.method == 'GET':
        if request.user.is_authenticated:
            user = request.user
            order = OrderModel.objects.get(id=id, user=user, ordered=True) 
            orderSerializer = OrderPaymentSerializer(order)

            return Response(orderSerializer.data, status=status.HTTP_200_OK)
        else:
            data = {}
            data['response'] = "User is not authenticated"
            return Response(data)
    else:
        data = {'Error' : 'Bad Request'}
        return Response(data, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def FullFillOrder(request, orderId):
    if request.user.is_authenticated:
        order = OrderModel.objects.get(id = orderId)
        order.ordered = True
        order.save()

        data = {}
        data['response'] = 'Order Fullfiled'

        return Response(data)
    else:
        data = {}
        data['response'] = "User is not authenticated"
        return Response(data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def OrderQuantity(request):
    if request.user.is_authenticated:
        try: 
            user = request.user
            order, created = OrderModel.objects.get_or_create(user = user, ordered = False)
            orderItems = OrderItemModel.objects.filter(order = order)
            orderItemSerializer = OrderQuantitySerializer(orderItems, many = True)

            return Response(orderItemSerializer.data, status=status.HTTP_200_OK)

        except OrderModel.DoesNotExist:
            data = {'Response' : 0}
            return Response(data, status=status.HTTP_200_OK)    
    else:
        data = {}
        data['response'] = "User is not authenticated"
        return Response(data)