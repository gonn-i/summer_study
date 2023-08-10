with open ("vocabulary.txt", "a") as f:
    while (1):
        f.eng = input("영어 단어를 입력하세요:")
        if(f.eng == "q"):
            break
        f.kor = input("한국어 뜻을 입력하세요:")
        if(f.kor == "q"):
            break
        else: f.write(f"{f.eng}: {f.kor}\n")