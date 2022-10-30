from rest_framework import serializers
from .models import *

# Product Category Serializer
class ProductCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductCategoryModel
        fields = '__all__'

# Product Serializer
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductModel
        fields = '__all__'

# Order Item Extended Serializer
class OrderItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only = True)
    class Meta:
        model = OrderItemModel
        fields = ['id', 'quantity', 'size', 'order', 'item_total','product']

# Shipping Address Serializer
class ShippingAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShippingAddressModel
        fields = '__all__'

# Order For Extended Serializer
class OrderPaymentSerializer(serializers.ModelSerializer):
    orderItem = OrderItemSerializer(read_only = True, many = True)
    shippingAddress = ShippingAddressSerializer(read_only = True, many = True)
    class Meta:
        model = OrderModel
        fields = ['id', 'user', 'ordered', 'dataOrdered', 'order_total', 'shippingAddress', 'orderItem']
