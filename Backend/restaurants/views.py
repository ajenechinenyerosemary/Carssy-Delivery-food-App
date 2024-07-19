from django.shortcuts import render
from django.urls import reverse_lazy
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from .models import Restaurant
from rest_framework import generics
from .serializers import RestaurantSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status


# Create your views here.

# class RestaurantListView(ListView):
#     model = Restaurant
#     template_name = 'restaurants/restaurant_list.html'
#     context_object_name = 'restaurants'

# class RestaurantDetailView(DetailView):
#     model = Restaurant
#     template_name = 'restaurants/restaurant_detail.html'
#     context_object_name = 'restaurant'

# class RestaurantCreateView(CreateView):
#     model = Restaurant
#     template_name = 'restaurants/restaurant_form.html'
#     fields = ['name', 'cuisine', 'menu', 'description', 'header_image', 'logo', 'address', 'opening_hours', 'minimum_order_amount', 'delivery_charge', 'estimated_delivery_time', 'branch_status']
#     success_url = reverse_lazy('restaurant-list')

# class RestaurantUpdateView(UpdateView):
#     model = Restaurant
#     template_name = 'restaurants/restaurant_form.html'
#     fields = ['name', 'cuisine', 'menu', 'description', 'header_image', 'logo', 'address', 'opening_hours', 'minimum_order_amount', 'delivery_charge', 'estimated_delivery_time', 'branch_status']
#     success_url = reverse_lazy('restaurant-list')

# class RestaurantDeleteView(DeleteView):
#     model = Restaurant
#     template_name = 'restaurants/restaurant_confirm_delete.html'
#     success_url = reverse_lazy('restaurant-list')
    
  

# class RestaurantListCreateView(generics.ListCreateAPIView):
#     queryset = Restaurant.objects.all()
#     serializer_class = RestaurantSerializer

# class RestaurantRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Restaurant.objects.all()
#     serializer_class = RestaurantSerializer




class RestaurantListCreateView(APIView):
    def get(self, request):
        restaurants = Restaurant.objects.all()
        serializer = RestaurantSerializer(restaurants, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = RestaurantSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RestaurantDetailView(APIView):
    def get_object(self, pk):
        try:
            return Restaurant.objects.get(pk=pk)
        except Restaurant.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        restaurant = self.get_object(pk)
        serializer = RestaurantSerializer(restaurant)
        return Response(serializer.data)

    def delete(self, request, pk):
        restaurant = self.get_object(pk)
        restaurant.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
