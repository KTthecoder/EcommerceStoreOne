from rest_framework import serializers
from .models import *

class ProductCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductCategoryModel
        fields = '__all__'

class ProductImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImagesModel
        fields = '__all__'

class SmallOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderModel
        fields = '__all__'

class ProductDetailsSerializer(serializers.ModelSerializer):
    productimages = ProductImagesSerializer(read_only = True, many = True)
    categoryName = serializers.SerializerMethodField('get_category_name')
    class Meta:
        model = ProductModel
        fields = ['id', 'name', 'regularPrice', 'discountPrice', 'description', 'frontImage', 'alt', 'slug', 'sizeS', 'isSizeS', 'sizeM', 'isSizeM', 'sizeL', 'isSizeL', 'sizeXL', 'isSizeXL', 'date', 'color', 'categoryName', 'productimages']

    def get_category_name(self, product):
        return product.category.name
    
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductModel
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    order_total = serializers.FloatField()
    class Meta:
        model = OrderModel
        fields = ['id', 'ordered', 'dataOrdered', 'user', 'order_total']

class OrderItemSerializer(serializers.ModelSerializer):
    product = ProductDetailsSerializer(read_only = True)
    order = OrderSerializer(read_only = True)
    order_total = serializers.SerializerMethodField('get_order_total')

    class Meta:
        model = OrderItemModel
        fields = ['id', 'quantity', 'size', 'order', 'order_total', 'item_total', 'product']

    def get_order_total(self, order):
        return order.order.order_total

class ShippingAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShippingAddressModel
        fields = '__all__'

class OrderPaymentSerializer(serializers.ModelSerializer):
    orderItem = OrderItemSerializer(read_only = True, many = True)
    shippingAddress = ShippingAddressSerializer(read_only = True, many = True)
    class Meta:
        model = OrderModel
        fields = ['id', 'user', 'ordered', 'dataOrdered', 'order_total', 'shippingAddress', 'orderItem']

class OrderQuantitySerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItemModel
        fields = ['id', 'quantity']
