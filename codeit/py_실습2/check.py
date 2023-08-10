import random

vocab={}
with open ("vocabulary.txt","r") as f:
    for line in f:
        split_line = (line.strip().split(": "))
        eng, kor = split_line[0], split_line[1]
        vocab[eng] = kor
    
    keys = list(vocab.keys())
    
    while (1):
        rand = random.randint(0,len(vocab)-1)
        eng_word= keys[rand]
        k_word = vocab[eng_word]

        guess = input(f"{vocab[eng_word]}: ")
        if (guess == "q"): break
        elif (guess == keys[rand]):
            print("맞았습니다!")
        else: print(f"틀렸습니다. 정답은 {keys[rand]}입니다.")
