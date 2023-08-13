from django.shortcuts import render

# Create your views here.
def index (response):
    return render (response, 'cities/index.html')

def city_detail (response, city):
    if city == 'seoul':
         return render (response, 'cities/seoul.html')
    elif city == 'tokyo':
         return render (response, 'cities/tokyo.html')
    elif city == 'paris':
         return render (response, 'cities/paris.html')
    else:return render (response, 'cities/index.html')