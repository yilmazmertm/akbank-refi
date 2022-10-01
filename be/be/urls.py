from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/customer/', include('customer.urls')),
    path('api/invoice/', include('invoice.urls')),
    path('api/product/', include('product.urls'))
]
