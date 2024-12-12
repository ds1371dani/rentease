from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import RentalItem, RentalAvailability, Booking, Subscription
from .serializers import (
    RentalItemSerializer,
    RentalAvailabilitySerializer,
    BookingSerializer,
    SubscriptionSerializer
)


class RentalItemViewSet(viewsets.ModelViewSet):
    queryset = RentalItem.objects.all()
    serializer_class = RentalItemSerializer


class RentalAvailabilityViewSet(viewsets.ModelViewSet):
    queryset = RentalAvailability.objects.all()
    serializer_class = RentalAvailabilitySerializer


class BookingViewSet(viewsets.ModelViewSet):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer

    def create(self, request, *args, **kwargs):
        data = request.data
        item = RentalItem.objects.get(id=data['item'])
        # Calculate total price based on days
        total_days = (data['end_date'] - data['start_date']).days
        total_price = total_days * item.price_per_day
        data['total_price'] = total_price

        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class SubscriptionViewSet(viewsets.ModelViewSet):
    queryset = Subscription.objects.all()
    serializer_class = SubscriptionSerializer

from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def sample_view(request):
    data = {"message": "Hello from Django!"}
    return Response(data)
