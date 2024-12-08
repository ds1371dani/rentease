from django.contrib import admin
from .models import RentalItem, RentalAvailability, Booking, Subscription

admin.site.register(RentalItem)
admin.site.register(RentalAvailability)
admin.site.register(Booking)
admin.site.register(Subscription)
