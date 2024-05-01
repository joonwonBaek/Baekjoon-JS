from collections import deque

t = int(input())
dx = [1, -1, 0, 0]
dy = [0, 0, -1, 1]
def bfs(x, y):
    queue = deque()

    queue.append((x,y))
    while queue:
        x, y = queue.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            if 0 <= nx < m and 0 <= ny < n:
                if graph[nx][ny] == 1:
                    queue.append((nx, ny))
                    graph[nx][ny] = 0


for _ in range(t):
    m, n, k = map(int, input().split())
    graph = [[0]*n for _ in range(m)]
    visited = [[0] * n for _ in range(m)]
    answer = 0

    for _ in range(k):
        a, b = map(int, input().split())
        graph[a][b] = 1

    for i in range(m):
        for j in range(n):
            if graph[i][j] == 1:
                bfs(i, j)
                answer += 1

    print(answer)