
from django.db import models


class Restaurant(models.Model):
    name = models.CharField(max_length=100)
    cuisine = models.CharField(max_length=50)
    menu = models.TextField()
    description = models.TextField()
    header_image = models.ImageField(upload_to='headerImage/')
    logo = models.ImageField(upload_to='logo/')
    address = models.CharField(max_length=255)
    opening_hours = models.CharField(max_length=100)
    minimum_order_amount = models.DecimalField(max_digits=10, decimal_places=2)
    delivery_charge = models.DecimalField(max_digits=10, decimal_places=2)
    estimated_delivery_time = models.CharField(max_length=50)
    branch_status = models.CharField(max_length=50)
    
    def __str__(self):
        return self.name

