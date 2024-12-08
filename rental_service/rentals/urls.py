from django.urls import include, re_path
from rest_framework.routers import DefaultRouter
from .views import RentalItemViewSet, RentalAvailabilityViewSet, BookingViewSet, SubscriptionViewSet

router = DefaultRouter()
router.register(r'rental-items', RentalItemViewSet, basename='rental-item')
router.register(r'availabilities', RentalAvailabilityViewSet, basename='availability')
router.register(r'bookings', BookingViewSet, basename='booking')
router.register(r'subscriptions', SubscriptionViewSet, basename='subscription')

urlpatterns = [
    re_path(r'^', include(router.urls)),
]
