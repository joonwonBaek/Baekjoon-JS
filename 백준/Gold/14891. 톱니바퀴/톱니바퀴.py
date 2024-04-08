from collections import deque

wheel = []
for _ in range(4):
    data = deque(map(int, input()))
    wheel.append(data)

k = int(input())
rot = []
for i in range(k):
    rot.append(list(map(int, input().split())))
    rot[i][0] -= 1

def right(x, y):
    if x > 3 or wheel[x-1][2] == wheel[x][6]:
        return
    if wheel[x-1][2] != wheel[x][6]:
        right(x+1, -y)
        wheel[x].rotate(y)

def left(x, y):
    if x < 0 or wheel[x+1][6] == wheel[x][2]:
        return
    if wheel[x+1][6] != wheel[x][2]:
        left(x-1, -y)
        wheel[x].rotate(y)


for x, y in rot:
    left(x-1, -y)
    right(x+1, -y)
    wheel[x].rotate(y)

answer = 0

for i in range(4):
    if wheel[i][0] == 1:
        answer += 2**i

print(answer)




