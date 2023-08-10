import random

def generate_numbers(n):
    count = 0 
    num_list = []
    while (count < n):
        num = random.randint(1,45)
        while num in num_list:
            num = random.randint(1,45)
        num_list.append(num)
        count += 1
    return num_list

def draw_winning_numbers():
    normal_list = generate_numbers(6)
    normal_list.sort()
    special_num = generate_numbers(1)
    lottery_num = normal_list + special_num
    return (lottery_num)

def count_matching_numbers(numbers, winning_numbers):
    list_len,list2_len = len(numbers),len(winning_numbers)
    i=0
    j=0 
    count = 0 
    while (i < list_len):
        j = 0  # j값 초기화 잊지 말기 
        while(j < list2_len):
            if(numbers[i] == winning_numbers[j]):
                count += 1
            j += 1
        i += 1
    return count

def check(numbers_test, winning_numbers_test):
    price= 0
    normal_win_num = list(winning_numbers_test)
    del normal_win_num[6]
    count = count_matching_numbers(numbers_test, normal_win_num)
    if (count == 6):
        price =1000000000
    elif (count == 5):
        if winning_numbers_test[6] in numbers_test: price= 50000000000
        else: price=1000000000
    elif (count == 4):
        price=50000
    elif (count == 3):
        price=5000
    return price
    
    