from django.shortcuts import render
from datetime import datetime

# Create your views here.
def menu(request):
    today = datetime.today().date
    context = {
        "date": today
    }
    return render (request, 'menus/index.html', context= context)

def foods_detail (response, food):
    context = dict()
    if food == 'chicken':
        context["name"] = "코코치킨"
        context["description"] = "둘이 먹다가 둘이 죽어도 모를 맛 !" 
        context["price"] = "10,000"
        context["img"] = "menus/images/chicken.jpg"
    return render (response, 'menus/foods_detail.html', context= context)