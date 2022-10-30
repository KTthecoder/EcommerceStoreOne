from mainApp.serializers import OrderItemSerializer, ShippingAddressSerializer, OrderPaymentSerializer
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


# Add Product adds product to shopping cart (Adds orderItem to OrderModel)
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


# Remove Product removes product from shopping cart (Removes orderItem from OrderModel)
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


#Add Shipping Address gets shipping data from form and save it in database
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


# Payment Page shows list of items in cart from order and shipping address
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