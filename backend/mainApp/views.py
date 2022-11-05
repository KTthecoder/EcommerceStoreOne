from .models import *
from .serializers import *
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

# API List return list of all available reguests
@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def ApiList(request):
    if request.method == 'GET':
        context = {
            'JWT' : 'api/token/',
            'JWT-Refresh' : 'api/token/refresh/',
            'HomePage' : 'api/home',
            'AllProducts' : 'api/all-products',
            'ProductsBySize' : 'api/products/filter-by-size/<str:size>',
            'ProductsByColor' : 'api/products/filter-by-color/<str:color>',
            'ProductsSorting' : 'api/products/order-by/<str:sortMethod>',
            'ProductsOnSale' : 'api/products/on-sale',
            'CartPage' : 'api/cart',
            'AddProduct' : 'api/cart/add/<int:productId>/<str:size>',
            'RemoveProduct' : 'api/cart/remove/<int:orderItemId>',
            'AddShippingAddress' : 'api/cart/shipping-address',
            'PaymentPage' : 'api/cart/payment',
        }
        return Response(context, status=status.HTTP_200_OK)
    else:
        data = {'Error' : 'Bad Request'}
        return Response(data, status=status.HTTP_400_BAD_REQUEST)


# HomePage shows all categories and all products if exists if not it shows error
@api_view(['GET'])
def HomePage(request):
    if request.method == 'GET':
        products = ProductModel.objects.all()
        categories = ProductCategoryModel.objects.all()

        if not products.exists() or not categories.exists():
            data = {'Error' : 'ProductModel or ProductCategoryModel is empty'}
            return Response(data, status=status.HTTP_200_OK)

        prodcutsSerializer = ProductSerializer(products, many = True)
        categoriesSerializer = ProductCategorySerializer(categories, many = True)

        return Response([categoriesSerializer.data, prodcutsSerializer.data], status=status.HTTP_200_OK)
    else:
        data = {'Error' : 'Bad Request'}
        return Response(data, status=status.HTTP_400_BAD_REQUEST)


# All Products show list of all products if exists else return the error message
@api_view(['GET'])
def AllProducts(request):
    if request.method == 'GET':
        products = ProductModel.objects.all()

        if not products.exists():
            data = {'Error' : 'ProductModel is empty'}
            return Response(data, status=status.HTTP_200_OK)

        prodcutsSerializer = ProductSerializer(products, many = True)
        return Response(prodcutsSerializer.data, status=status.HTTP_200_OK)
    else:
        data = {'Error' : 'Bad Request'}
        return Response(data, status=status.HTTP_400_BAD_REQUEST)

# Product Details show product by slug
@api_view(['GET'])
def ProductDetails(request, slug):
    if request.method == 'GET':
        try:
            product = ProductModel.objects.get(slug = slug)
        except ProductModel.DoesNotExist:
            data = {'Error' : 'ProductModel is empty'}
            return Response(data, status=status.HTTP_200_OK)

        prodcutsDetailsSerializer = ProductDetailsSerializer(product)
        return Response(prodcutsDetailsSerializer.data, status=status.HTTP_200_OK)
    else:
        data = {'Error' : 'Bad Request'}
        return Response(data, status=status.HTTP_400_BAD_REQUEST)


# Products By Size checks if product have size if has try to find products that have this size if not returns error
@api_view(['GET'])
def ProductsBySize(request, size):
    if request.method == 'GET':
        if size == 's': 
            products = ProductModel.objects.filter(isSizeS = True)
            if products.exists():
                productsSerializer = ProductSerializer(products, many = True)
            else:
                data = {'Error' : 'This product do not have size S'}
                return Response(data, status=status.HTTP_200_OK)
        elif size == 'm':
            products = ProductModel.objects.filter(isSizeM = True)
            if products.exists():
                productsSerializer = ProductSerializer(products, many = True)
            else:
                data = {'Error' : 'This product do not have size M'}
                return Response(data, status=status.HTTP_200_OK)
        elif size == 'l':
            products = ProductModel.objects.filter(isSizeL = True)
            if products.exists():
                productsSerializer = ProductSerializer(products, many = True)
            else:
                data = {'Error' : 'This product do not have size L'}
                return Response(data, status=status.HTTP_200_OK)
        elif size == 'xl':
            products = ProductModel.objects.filter(isSizeXL = True)
            if products.exists():
                productsSerializer = ProductSerializer(products, many = True)
            else:
                data = {'Error' : 'This product do not have size XL'}
                return Response(data, status=status.HTTP_200_OK)
        else:
            data = {'Error' : 'This in not valid size'}
            return Response(data, status=status.HTTP_200_OK)

        return Response(productsSerializer.data, status=status.HTTP_200_OK)
    else:
        data = {'Error' : 'Bad Request'}
        return Response(data, status=status.HTTP_400_BAD_REQUEST)


# Products By Color checks if product have color if has try to find products that have this color if not returns error
@api_view(['GET'])
def ProductsByColor(request, color):
    if request.method == 'GET':
        if color == 'white':
            products = ProductModel.objects.filter(color = 'WHITE')
            if products.exists():
                productsSerializer = ProductSerializer(products, many = True)
            else:
                data = {'Error' : 'There is no product with White Color'}
                return Response(data, status=status.HTTP_200_OK)
        elif color == 'black':
            products = ProductModel.objects.filter(color = 'BLACK')
            if products.exists():
                productsSerializer = ProductSerializer(products, many = True)
            else:
                data = {'Error' : 'There is no product with Black Color'}
                return Response(data, status=status.HTTP_200_OK)
        elif color == 'grey':
            products = ProductModel.objects.filter(color = 'GREY')
            if products.exists():
                productsSerializer = ProductSerializer(products, many = True)
            else:
                data = {'Error' : 'There is no product with Grey Color'}
                return Response(data, status=status.HTTP_200_OK)
        elif color == 'beige':
            products = ProductModel.objects.filter(color = 'BEIGE')
            if products.exists():
                productsSerializer = ProductSerializer(products, many = True)
            else:
                data = {'Error' : 'There is no product with Beige Color'}
                return Response(data, status=status.HTTP_200_OK)
        elif color == 'green':
            products = ProductModel.objects.filter(color = 'GREEN')
            if products.exists():
                productsSerializer = ProductSerializer(products, many = True)
            else:
                data = {'Error' : 'There is no product with Green Color'}
                return Response(data, status=status.HTTP_200_OK)
        else:
            data = {'Error' : 'There is no product with that color or It is no color'}
            return Response(data, status=status.HTTP_200_OK)

        return Response(productsSerializer.data, status=status.HTTP_200_OK)
    else:
        data = {'Error' : 'Bad Request'}
        return Response(data, status=status.HTTP_400_BAD_REQUEST)


# Products Sorting show product ordered by method given if there's no method gives error
@api_view(['GET'])
def ProductsSorting(request, sortMethod):
    if request.method == 'GET':
        if sortMethod == 'newest-first':
            products = ProductModel.objects.order_by('-date')
            if products.exists():
                productsSerializer = ProductSerializer(products, many = True)
            else:
                data = {'Error' : 'There are not any products available'}
                return Response(data, status=status.HTTP_200_OK)
        elif sortMethod == 'high-to-low':
            products = ProductModel.objects.all().order_by('-regularPrice')
            if products.exists():
                productsSerializer = ProductSerializer(products, many = True)
            else:
                data = {'Error' : 'There are not any products available'}
                return Response(data, status=status.HTTP_200_OK)
        elif sortMethod == 'low-to-high':
            products = ProductModel.objects.all().order_by('regularPrice')
            if products.exists():
                productsSerializer = ProductSerializer(products, many = True)
            else:
                data = {'Error' : 'There are not any products available'}
                return Response(data, status=status.HTTP_200_OK)
        else:
            data = {'Error' : 'This sorting method is not available'}
            return Response(data, status=status.HTTP_200_OK)

        return Response(productsSerializer.data, status=status.HTTP_200_OK)
    else:
        data = {'Error' : 'Bad Request'}
        return Response(data, status=status.HTTP_400_BAD_REQUEST)


# Products On Sale shows products on sale if there are any but if not shows error message
@api_view(['GET'])
def ProductsOnSale(request):
    if request.method == 'GET':
        products = ProductModel.objects.exclude(discountPrice__isnull=True)
        if products.exists():
            productsSerializer = ProductSerializer(products, many = True)
        else:
            data = {'Error' : 'There are not any products available'}
            return Response(data, status=status.HTTP_200_OK)

        return Response(productsSerializer.data, status=status.HTTP_200_OK)
    else:
        data = {'Error' : 'Bad Request'}
        return Response(data, status=status.HTTP_400_BAD_REQUEST)


# All Categories show list of all categories if exists else return the error message
@api_view(['GET'])
def AllCategories(request):
    if request.method == 'GET':
        categories = ProductCategoryModel.objects.all()

        if not categories.exists():
            data = {'Error' : 'There is no any category'}
            return Response(data, status=status.HTTP_200_OK)

        categoriesSerializer = ProductCategorySerializer(categories, many = True)
        return Response(categoriesSerializer.data, status=status.HTTP_200_OK)
    else:
        data = {'Error' : 'Bad Request'}
        return Response(data, status=status.HTTP_400_BAD_REQUEST)


