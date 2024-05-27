n = int(input())
def choose_good(depth, result):
    for i in range(1, depth // 2 + 1):
        if result[depth-i:] == result[depth-2*i:depth-i]:
            return
    if depth == n:
        print(result)
        exit()

    for i in range(1, 4):
        temp = int(result) * 10 + i
        choose_good(depth + 1, str(temp))

choose_good(0, "0")