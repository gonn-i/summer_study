import random

answer = random.randint(1,20)

def main ():
    count = 4
    while(count >= 1):
        guess = int(input(f"기회가 {count}번 남았습니다. 1-20 사이의 숫자를 맞혀 보세요:"))
        if (answer == guess): 
            print(f"축하합니다. {count}번 만에 숫자를 맞히셨습니다.") 
            break
        elif (answer > guess): 
            count -= 1
            print("UP") 
        else: 
            count -= 1
            print("DOWN")
    if (count == 0): 
        print(f"아쉽습니다. 정답은 {answer}입니다.")
    
            
main()
