t = int(input())
for _ in range(t):
    word = input()
    k = int(input())
    check = False

    max_answer = -1
    min_answer = len(word)
    count_dict = {}
    check_dict = {}
    for w in word:
        count_dict[w] = count_dict.get(w, 0) + 1

    # K개 이상인 문자의 인덱스를 딕셔너리에 저장
    for i in range(len(word)):
        if count_dict[word[i]] < k:
            continue
        check_dict[word[i]] = check_dict.get(word[i], []) + [i]

    if len(check_dict) == 0:
        print(-1)
    else:
        # 인덱스 번호를 바탕
        for key, value in check_dict.items():
            for i in range(len(value)-k+1):
                max_answer = max(max_answer, value[i+k-1] - value[i] + 1)
                min_answer = min(min_answer, value[i+k-1] - value[i] + 1)
        print(min_answer, max_answer)