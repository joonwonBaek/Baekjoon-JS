from collections import deque

n, m = map(int, input().split())

train = [deque([0]*20) for _ in range(n)]

for _ in range(m):
    a = list(map(int, input().split()))

    if a[0] == 1:
        if train[a[1]-1][a[2]-1] == 0:
            train[a[1]-1][a[2] - 1] = 1
        else:
            continue
    elif a[0] == 2:
        if train[a[1]-1][a[2]-1] == 1:
            train[a[1]-1][a[2] - 1] = 0
        else:
            continue
    elif a[0] == 3:
        if train[a[1]-1][19] == 1:
            train[a[1]-1][19] = 0
        train[a[1]-1].rotate(1)
    elif a[0] == 4:
        if train[a[1]-1][0] == 1:
            train[a[1]-1][0] = 0
        train[a[1]-1].rotate(-1)

temp = []
answer = 0
for x in train:
    if x in temp:
        continue
    else:
        temp.append(x)
        answer += 1
print(answer)




