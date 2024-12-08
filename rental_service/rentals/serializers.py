from rest_framework import serializers
from .models import RentalItem, RentalAvailability, Booking, Subscription


class RentalItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = RentalItem
        fields = '__all__'


class RentalAvailabilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = RentalAvailability
        fields = '__all__'


class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__'


class SubscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subscription
        fields = '__all__'
