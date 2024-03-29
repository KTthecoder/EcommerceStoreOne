from django.contrib import admin
from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from mainApp.views import *
from cartApp.views import *
from accountApp.views import *
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/', ApiList, name='ApiList'),

    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/register', RegisterPage, name='RegisterPage'),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),

    path('api/home', HomePage, name='HomePage'),
    path('api/all-products', AllProducts, name='AllProducts'),
    path('api/product/recommended', RecommendedProducts, name='RecommendedProducts'),
    path('api/product/<slug:slug>', ProductDetails, name='ProductDetails'),
    path('api/products/filter-by-size/<str:size>', ProductsBySize, name='ProductsBySize'),
    path('api/products/filter-by-color/<str:color>', ProductsByColor, name='ProductsByColor'),
    path('api/products/order-by/<str:sortMethod>', ProductsSorting, name='ProductsSorting'),
    path('api/products/on-sale', ProductsOnSale, name='ProductsOnSale'),
    path('api/product/category/<slug:category>', ProductsByCategory, name='ProductsByCategory'),
    path('api/search/<str:search>', SearchProduct, name='SearchProduct'),

    path('api/all-categories', AllCategories, name='AllCategories'),

    path('api/cart', CartPage, name='CartPage'),
    path('api/cart/add/<int:productId>/<str:size>', AddProduct, name='AddProduct'),
    path('api/cart/remove/<int:orderItemId>', RemoveProduct, name='RemoveProduct'),
    path('api/cart/shipping-address', AddShippingAddress, name='AddShippingAddress'),
    path('api/cart/shipping-address/show', ShowShippingAddress, name='ShowShippingAddress'),
    path('api/cart/shipping-address/exists', ShippingAddressExists, name='ShippingAddressExists'),
    path('api/cart/shipping-address/edit', ShippingAddressEdit, name='ShippingAddressEdit'),
    path('api/cart/payment', PaymentPage, name='PaymentPage'),
    path('api/payment/<int:orderId>/accept', FullFillOrder, name='FullFillOrder'),
    path('api/order/quantity', OrderQuantity, name='OrderQuantity'),
    path('api/orders', ProfileOrders, name='ProfileOrders'),
    path('api/order/<int:id>', OrderById, name='OrderById'),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
