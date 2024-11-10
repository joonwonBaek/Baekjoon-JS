from collections import deque

def bfs(home_x, home_y):
    q = deque()
    q.append((home_x, home_y))
    while q:
        x, y = q.popleft()
        if abs(x - festival_x) + abs(y - festival_y) <= 1000:
            print('happy')
            return
        for i in range(n):
            if not visited[i]:
                next_x, next_y = conv[i]
                if abs(x - next_x) + abs(y- next_y) <= 1000:
                    q.append((next_x, next_y))
                    visited[i] = True
    print('sad')
    return

tc = int(input())
for _ in range(tc):
    n = int(input())
    home_x, home_y = list(map(int, input().split()))
    conv = []
    for _ in range(n):
        x, y = map(int, input().split())
        conv.append((x, y))
    festival_x, festival_y = map(int, input().split())
    visited = [False for _ in range(n)]

    bfs(home_x, home_y)
