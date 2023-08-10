import random


def generate_numbers():
    numbers = []
    while (len(numbers) < 3):
        num = random.randint(0,9)
        if num in numbers: 
            num = random.randint(0,9)
        numbers.append(num)
        
    print("0과 9 사이의 서로 다른 숫자 3개를 랜덤한 순서로 뽑았습니다.\n")
    return numbers

def take_guess():
    print("숫자 3개를 하나씩 차례대로 입력하세요.")
    new_guess = []
    while (len(new_guess) < 3):
        num = int(input(f"{len(new_guess)+1}번째 숫자를 입력하세요: "))
        if num in new_guess:
            print("중복되는 숫자입니다. 다시 입력하세요.")
            continue
        if (num > 9 or num <0):
            print("범위를 벗어나는 숫자입니다. 다시 입력하세요.")
            continue
        else:          
            new_guess.append(num)
    return new_guess
    
def get_score(guesses, solution):
    strike_count = 0
    ball_count = 0
    for i in range (0,3):
        if (guesses[i] == solution[i]):
            strike_count += 1
        elif (guesses[i] in solution) and (guesses[i] != solution[i]):
            ball_count += 1
    return strike_count, ball_count

ANSWER = generate_numbers()
tries = 0

# 여기에 코드를 작성하세요
while (1):
    NEW_GUESS = take_guess()
    tries += 1
    s, b = (get_score(NEW_GUESS, ANSWER))
    print(f"{s}S {b}B")
    if (s == 3):
        break
    else: continue
print("축하합니다. {}번 만에 숫자 3개의 값과 위치를 모두 맞히셨습니다.".format(tries))
    
        