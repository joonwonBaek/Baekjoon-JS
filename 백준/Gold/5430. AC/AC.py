from collections import deque

t = int(input())
for i in range(t):
    p = input().strip()
    n = int(input())
    arr = input().strip()
    q = deque(arr[1:-1].split(','))
    flag = 1
    if n == 0:
        q = deque()

    R = 0
    for a in p:
        if a == 'R':
            R += 1
        elif a == 'D':
            if len(q) == 0:
                print("error")
                flag = 0
                break
            else:
                if R % 2 == 0:
                    q.popleft()
                else:
                    q.pop()
    if flag == 0:
        continue
    else:
        if R % 2 == 0:
            print('[' + ",".join(q) + ']')
        else:
            q.reverse()
            print('[' + ",".join(q) + ']')