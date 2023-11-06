from django.shortcuts import render,redirect
from django.http import HttpResponse,request
from .models import Dashboard







def dashboard_view(request):
    # Retrieve data from the Dashboard model
    data = Dashboard.objects.all()
    context = {'data': data}
    return render(request, 'index.html', context)

def report(request):
    return render(request,'mp.html')