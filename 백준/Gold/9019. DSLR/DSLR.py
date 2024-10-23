from collections import deque

t = int(input())

for _ in range(t):
    a, b = map(int, input().split())
    num = [False for _ in range(10001)]

    q = deque()
    q.append([a, ''])
    num[a] = True

    while q:
        n, cmd = q.popleft()

        if n == b:
            print(cmd)
            break

        d = (n * 2) % 10000
        if not num[d]:
            num[d] = True
            q.append([d, cmd + 'D'])

        s = (n - 1) % 10000
        if not num[s]:
            num[s] = True
            q.append([s, cmd + 'S'])

        l = n // 1000 + (n % 1000) * 10
        if not num[l]:
            num[l] = True
            q.append([l, cmd + 'L'])

        r = (n // 10) + (n % 10) * 1000
        if not num[r]:
            num[r] = True
            q.append([r, cmd + 'R'])