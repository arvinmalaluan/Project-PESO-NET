from .serializers import UserAccountSerializer
from .models import Account

from rest_framework.decorators import api_view
from rest_framework.response import Response

from django.shortcuts import get_object_or_404
from django.db.models import Q
from django.contrib.auth.hashers import check_password

# Create your views here.
@api_view(['POST'])
def login(request):
    user = get_object_or_404(Account, Q(username=request.data['identifier']) | Q(email=request.data['identifier']))
    
    # validate whether the raw password or the password input is the same with the hashed password or the saved password
    does_match = check_password(request.data['password'], user.password)
    if does_match:
        user = Account.objects.get(Q(email = request.data['identifier']) | Q(username = request.data['identifier']))
        fetch_data = {
            'identifier': user.email,
            'role': user.role.id
        }

        # Insert JWT here
        return Response({'success': 1, 'data': fetch_data })
    
    return Response({'success': 0, 'message': 'invalid log in credential'})


@api_view(['POST'])
def register(request):
    serializer = UserAccountSerializer(data = request.data)

    if serializer.is_valid():
        serializer.save()
        return Response({'success': 1 })

    return Response({'success': 0, 'message': serializer.errors})


@api_view(['PUT'])
def update_user_info(request):
    try:

        if 'id' in request.data:
            account = Account.objects.get(id=request.data['id'])
        elif 'email' in request.data:
            account = Account.objects.get(email=request.data['email'])
        else:
            return Response({'success': 0, 'message': 'Email cannot be null'})

        serializer = UserAccountSerializer(account, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response({"success": 1})
        
        return Response({'success': serializer.errors})
    
    except Account.DoesNotExist:
        return Response({'success': 0, 'message': 'not found'})