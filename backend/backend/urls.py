"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
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
)

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/', ApiList, name='ApiList'),

    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # path('api/token/refresh/', get_tokens_for_user, name='get_tokens_for_user'),
    path('api/register', RegisterPage, name='RegisterPage'),

    path('api/home', HomePage, name='HomePage'),
    path('api/all-products', AllProducts, name='AllProducts'),
    path('api/product/<slug:slug>', ProductDetails, name='ProductDetails'),
    path('api/products/filter-by-size/<str:size>', ProductsBySize, name='ProductsBySize'),
    path('api/products/filter-by-color/<str:color>', ProductsByColor, name='ProductsByColor'),
    path('api/products/order-by/<str:sortMethod>', ProductsSorting, name='ProductsSorting'),
    path('api/products/on-sale', ProductsOnSale, name='ProductsOnSale'),

    path('api/all-categories', AllCategories, name='AllCategories'),

    path('api/cart', CartPage, name='CartPage'),
    path('api/cart/add/<int:productId>/<str:size>', AddProduct, name='AddProduct'),
    path('api/cart/remove/<int:orderItemId>', RemoveProduct, name='RemoveProduct'),
    path('api/cart/shipping-address', AddShippingAddress, name='AddShippingAddress'),
    path('api/cart/shipping-address/show', ShowShippingAddress, name='ShowShippingAddress'),
    path('api/cart/shipping-address/exists', ShippingAddressExists, name='ShippingAddressExists'),
    path('api/cart/payment', PaymentPage, name='PaymentPage'),
    path('api/payment/<int:orderId>/accept', FullFillOrder, name='FullFillOrder'),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
