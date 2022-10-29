from enum import unique
from secrets import choice
from django.db import models
from django.contrib.auth.models import User

# Size Choice
size_choice = (
    ('S', 'S'),
    ('M', 'M'),
    ('L', 'L'),
    ('XL', 'XL')
)

color_choice = (
    ('WHITE', 'White'),
    ('BLACK', 'Black'),
    ('GREY', 'Grey'),
    ('BEIGE', 'Beige'),
    ('GREEN', 'Green')
)

# Product Category Model
class ProductCategoryModel(models.Model):
    name = models.CharField(max_length=50, blank=False, null=True)
    img = models.ImageField(upload_to='categoryFrontImgs')
    alt = models.CharField(max_length=150)
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.name

# Product Model
class ProductModel(models.Model):
    name = models.CharField(max_length=250, blank=False, null=True)
    regularPrice = models.DecimalField(max_digits=5, decimal_places=2, blank=False, null=True)
    discountPrice = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    description = models.TextField(blank=False, null=True)
    frontImage = models.ImageField(upload_to='productFrontImgs')
    alt = models.CharField(max_length=150)
    slug = models.SlugField(unique=True)
    sizeS = models.IntegerField()
    isSizeS = models.BooleanField()
    sizeM = models.IntegerField()
    isSizeM = models.BooleanField()
    sizeL = models.IntegerField()
    isSizeL = models.BooleanField()
    sizeXL = models.IntegerField()
    isSizeXL = models.BooleanField()
    date = models.DateTimeField(auto_now=False, auto_now_add=True)

    color = models.CharField(max_length=7, choices=color_choice, blank=False, null=True)
    category = models.ForeignKey(ProductCategoryModel, on_delete=models.SET_NULL, blank=False, null=True)

    def __str__(self):
        return self.name

# Product Images List
class ProductImages(models.Model):
    image = models.ImageField(upload_to='productDetailsImgs')
    alt = models.CharField(max_length=150)

    product = models.ForeignKey(ProductModel, on_delete=models.SET_NULL, blank=False, null=True)

    def __str__(self):
        return self.image.url

# Order Model
class OrderModel(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    ordered = models.BooleanField(blank=False, null=False)
    dataOrdered = models.DateTimeField(auto_now=False, auto_now_add=True)

    def __str__(self):
        return str(self.id) + " - " + self.user.username

    @property
    def order_total(self):
        items = self.orderitem_set.all()
        total = sum(item.item_total for item in items)
        return total

# Order Item Model
class OrderItemModel(models.Model):
    quantity = models.IntegerField(default=0, null=True, blank=True)

    size = models.CharField(max_length=2, choices=size_choice, blank=False, null=True)
    order = models.ForeignKey(OrderModel, related_name='orderitem', null=True, blank=True, on_delete=models.CASCADE)
    product = models.ForeignKey(ProductModel, on_delete=models.SET_NULL, blank=False, null=True)

    def __str__(self):
        return "Order " + str(self.order.id)

    @property
    def item_total(self):
        if self.product.discountPrice:
            return float(self.product.discountPrice) * float(self.quantity)
        else:
            return float(self.product.regularPrice) * float(self.quantity)

# Shipping Address Model
class ShippingAddress(models.Model):
    name = models.CharField(max_length=150, blank=False, null=True)
    lastName = models.CharField(max_length=150, blank=False, null=True)
    address = models.CharField(max_length=200, blank=False, null=True)
    email = models.EmailField(blank=False, null=True)
    phoneNr = models.CharField(max_length=9, blank=False, null=True)
    city = models.CharField(max_length=200, blank=False, null=True)
    zipcode = models.CharField(max_length=200, blank=False, null=True)
    order = models.ForeignKey(OrderModel, null=True, blank=True, related_name='shippingAddress', on_delete=models.CASCADE)
   
    def __str__(self):
        return self.name + " " + self.lastName
    