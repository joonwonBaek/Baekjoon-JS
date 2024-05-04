n = input()

temp = ''

answer = []

def command1(n):
    odd_n = 0
    for i in n:
        if int(i) % 2 != 0:
            odd_n += 1
    return odd_n

def dfs(n, cnt):
    global max_num, min_num
    if len(n) == 1:
        answer.append(cnt)
    elif len(n) == 2:
        temp = str(int(n[0]) + int(n[1]))
        dfs(temp, cnt + command1(temp))
    elif len(n) >= 3:
        for i in range(len(n)-2):
            for j in range(i+1, len(n)-1):
                a = n[:i + 1]
                b = n[i + 1: j + 1]
                c = n[j + 1:]
                temp = str(int(a) + int(b) + int(c))
                dfs(temp, cnt + command1(temp))

dfs(n, command1(n))

print(min(answer), max(answer))
