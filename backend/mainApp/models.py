from django.db import models
from django.contrib.auth.models import User
from django_resized import ResizedImageField

size_choice = (
    ('S', 's'),
    ('M', 'm'),
    ('L', 'l'),
    ('XL', 'xl')
)

color_choice = (
    ('White', 'White'),
    ('Black', 'Black'),
    ('Grey', 'Grey'),
    ('Beige', 'Beige'),
    ('Green', 'Green'),
    ('Red', 'Red'),
    ('Light', 'Light'),
    ('Brown', 'Brown'),
    ('Blue', 'Blue'),
    ('Purple', 'Purple'),
)

class ProductCategoryModel(models.Model):
    name = models.CharField(max_length=50, blank=False, null=True)
    img = ResizedImageField(force_format="WEBP", quality=80, upload_to="categoryFrontImgs")
    alt = models.CharField(max_length=150)
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.name

class ProductModel(models.Model):
    name = models.CharField(max_length=250, blank=False, null=True)
    regularPrice = models.DecimalField(max_digits=5, decimal_places=2, blank=False, null=True)
    discountPrice = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    description = models.TextField(blank=False, null=True)
    frontImage = ResizedImageField(force_format="WEBP", quality=80, upload_to="productFrontImgs")
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

class ProductImagesModel(models.Model):
    image = ResizedImageField(force_format="WEBP", quality=80, upload_to="productDetailsImgs") 
    alt = models.CharField(max_length=150)

    product = models.ForeignKey(ProductModel, related_name='productimages', on_delete=models.SET_NULL, blank=True, null=True)

    def __str__(self):
        return self.image.url

class OrderModel(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    ordered = models.BooleanField(blank=False, null=False)
    dataOrdered = models.DateTimeField(auto_now=False, auto_now_add=True)

    def __str__(self):
        return str(self.id) + " - " + self.user.username

    @property
    def order_total(self):
        items = self.orderItem.all()
        total = sum(item.item_total for item in items)
        return round(total, 2)

class OrderItemModel(models.Model):
    quantity = models.IntegerField(default=0, null=True, blank=True)

    size = models.CharField(max_length=2, choices=size_choice, blank=False, null=True)
    order = models.ForeignKey(OrderModel, related_name='orderItem', null=True, blank=True, on_delete=models.CASCADE)
    product = models.ForeignKey(ProductModel, on_delete=models.SET_NULL, blank=False, null=True)

    def __str__(self):
        return "Order " + str(self.order.id) + ", " + str(self.product.name)

    @property
    def item_total(self):
        if self.product.discountPrice:
            value = float(self.product.discountPrice) * float(self.quantity)
            return round(value, 2)
        else:
            value = float(self.product.regularPrice) * float(self.quantity)
            return round(value, 2)

class ShippingAddressModel(models.Model):
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
    