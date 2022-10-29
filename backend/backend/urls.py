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

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/home', HomePage, name='HomePage'),

    path('api/all-products', AllProducts, name='AllProducts'),
    path('api/products/filter-by-size/<str:size>', ProductsBySize, name='ProductsBySize'),
    path('api/products/filter-by-color/<str:color>', ProductsByColor, name='ProductsByColor'),
    path('api/products/order-by/<str:sortMethod>', ProductsSorting, name='ProductsSorting'),
    path('api/products/on-sale', ProductsOnSale, name='ProductsOnSale'),

    path('api/all-categories', AllCategories, name='AllCategories'),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
