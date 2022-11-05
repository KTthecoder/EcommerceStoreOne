from rest_framework import serializers
from .models import *

# Product Category Serializer
class ProductCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductCategoryModel
        fields = '__all__'

# Product Images Serializer
class ProductImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImagesModel
        fields = '__all__'

# Product Serializer
class ProductDetailsSerializer(serializers.ModelSerializer):
    productimages = ProductImagesSerializer(read_only = True, many = True)
    categoryName = serializers.SerializerMethodField('get_category_name')
    class Meta:
        model = ProductModel
        fields = ['id', 'name', 'regularPrice', 'discountPrice', 'description', 'frontImage', 'alt', 'slug', 'sizeS', 'isSizeS', 'sizeM', 'isSizeM', 'sizeL', 'isSizeL', 'sizeXL', 'isSizeXL', 'date', 'color', 'categoryName', 'productimages']

    def get_category_name(self, product):
        return product.category.name

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
        fields = ['id', 'quantity', 'size', 'order', 'item_total', 'product']

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
