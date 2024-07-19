from rest_framework import serializers
from .models import Restaurant

class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ['id', 'name', 'cuisine', 'menu', 'description', 'header_image', 'logo', 'address', 'opening_hours', 'minimum_order_amount', 'delivery_charge', 'estimated_delivery_time', 'branch_status']
