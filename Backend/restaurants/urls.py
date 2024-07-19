from django.urls import path
from . import views
from django.urls import path
# from .views import RestaurantListCreateView, RestaurantRetrieveUpdateDestroyView
from django.urls import path
from .views import RestaurantListCreateView, RestaurantDetailView


# urlpatterns = [
#     path('', views.RestaurantListView.as_view(), name='restaurant-list'),
#     path('<int:pk>/', views.RestaurantDetailView.as_view(), name='restaurant-detail'),
#     path('add/', views.RestaurantCreateView.as_view(), name='restaurant-add'),
#     path('<int:pk>/edit/', views.RestaurantUpdateView.as_view(), name='restaurant-edit'),
#     path('<int:pk>/delete/', views.RestaurantDeleteView.as_view(), name='restaurant-delete'),
#     path('api/restaurants/', RestaurantListCreateView.as_view(), name='restaurant-list-create'),
#     path('api/restaurants/<int:pk>/', RestaurantRetrieveUpdateDestroyView.as_view(), name='restaurant-retrieve-update-destroy'),
# ]


urlpatterns = [
    path('api/restaurants/', RestaurantListCreateView.as_view(), name='restaurant-list-create'),
    path('api/restaurants/<int:pk>/', RestaurantDetailView.as_view(), name='restaurant-detail'),
]
