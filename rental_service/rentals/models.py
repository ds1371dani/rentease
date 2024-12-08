from django.db import models
from django.contrib.auth.models import User


class RentalItem(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price_per_day = models.DecimalField(max_digits=10, decimal_places=2)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='rental_items')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class RentalAvailability(models.Model):
    item = models.ForeignKey(RentalItem, on_delete=models.CASCADE, related_name='availabilities')
    start_date = models.DateField()
    end_date = models.DateField()

    def __str__(self):
        return f"Availability for {self.item.name}"


class Booking(models.Model):
    item = models.ForeignKey(RentalItem, on_delete=models.CASCADE, related_name='bookings')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='bookings')
    start_date = models.DateField()
    end_date = models.DateField()
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(
        max_length=20,
        choices=[('PENDING', 'Pending'), ('CONFIRMED', 'Confirmed'), ('CANCELLED', 'Cancelled')],
        default='PENDING'
    )

    def __str__(self):
        return f"Booking by {self.user.username} for {self.item.name}"


class Subscription(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='subscriptions')
    item = models.ForeignKey(RentalItem, on_delete=models.CASCADE, related_name='subscriptions')
    start_date = models.DateField()
    end_date = models.DateField()
    plan = models.CharField(max_length=20, choices=[('WEEKLY', 'Weekly'), ('MONTHLY', 'Monthly')])
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f"Subscription by {self.user.username} for {self.item.name}"
