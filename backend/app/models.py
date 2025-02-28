from django.db import models
from django.contrib.auth.models import User

class Product(models.Model):
    name = models.CharField(max_length=64)
    price = models.PositiveIntegerField()
    description = models.TextField(max_length=500)


class OrderItem(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="order_items")
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    price = models.PositiveIntegerField()

class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="reviews")
    rating = models.PositiveIntegerField(default=5)
    text = models.TextField(max_length=500)
    created_at = models.DateField()
    product = models.ForeignKey(Product, on_delete=models.CASCADE)

