from django.shortcuts import render  
#렌더링 함수를 사용하기 위해 django.shortcuts 모듈 임포트/ render 함수는 html 페이지 렌더링 -> httpResponse 반환
from django.http import HttpResponse
# HttpResponse 객체는 클라이언트에게 전달할 응답을 생성

# Create your views here.
# def index(request):
#     return HttpResponse('안녕하세요')                   #return HttpResponse('html에 들어갈 내용')
#     return render(request, 'demos/index.html')       #return render(request, '각 앱/templates 폴더에서의 html 경로')

def calculator(request):
  # return HttpResponse('계산기 기능 구현 시작입니다. 이게 맞나요?')
  
  # 1. 데이터 확인
  num1 = request.GET.get('num1')
  num2 = request.GET.get('num2')
  operators = request.GET.get('operators')
  
  # 2. 계산
  if operators == '+':
    result = int(num1) + int(num2)
  elif operators == '-':
    result = int(num1) - int(num2)
  elif operators == '*':
    result = int(num1) * int(num2)
  elif operators == '/':
    result = int(num1) / int(num2)
  else:
    result = 0
    
  # 3. 응답
  return render(request, 'demos/calculator.html', {'result': result})