from django.shortcuts import render
from .serializer import UserSerializer
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.views import APIView
from django.http import JsonResponse
from django.db import IntegrityError
from rest_framework.exceptions import ValidationError
from .models import User, Product, OrderItem, Review
from rest_framework.authtoken.models import Token
from rest_framework.authentication import authenticate

class SignUp(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        try:
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return JsonResponse({"data": serializer.data}, status=status.HTTP_201_CREATED)
        except IntegrityError:
            return JsonResponse({"data": serializer.errors}, status=status.HTTP_409_CONFLICT)
        except ValidationError:
            return JsonResponse({"data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

class SignIn(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        if request.data.get("username") == None or request.data.get("password") == None:
            return JsonResponse({"message": "Ошибка валидации."}, status=status.HTTP_400_BAD_REQUEST)
        username = request.data.get("username")
        password = request.data.get("password")
        user = authenticate(username=username, password=password)
        if user:
            token, created = Token.objects.get_or_create(user=user)
            return JsonResponse({"Token": token.key})
        return JsonResponse({"message": "Неверные логин или пароль."}, status=status.HTTP_401_UNAUTHORIZED)

