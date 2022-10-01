from django.contrib import admin

from invoice.models import IncomingInvoice, OutgoingInvoice


@admin.register(IncomingInvoice)
class IncomingInvoiceAdmin(admin.ModelAdmin):
    list_display = ('customer', 'product', 'invoice_date', 'amount', 'product_kai_by_amount', 'created_at')


@admin.register(OutgoingInvoice)
class OutgoingInvoiceAdmin(admin.ModelAdmin):
    list_display = ('customer', 'product', 'invoice_date', 'amount', 'created_at')
