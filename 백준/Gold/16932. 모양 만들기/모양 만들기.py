from collections import deque

n, m = map(int, input().split())
graph = [list(map(int, input().split())) for _ in range(n)]
dx = [1, -1, 0, 0]
dy = [0, 0, -1, 1]
visited = [[0] * m for _ in range(n)]

def bfs(i, j):
    queue = deque()
    queue.append((i, j))
    visited[i][j] = num
    cnt = 1

    while queue:
        x, y = queue.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < n and 0 <= ny < m:
                if visited[nx][ny] == 0 and graph[nx][ny] == 1:
                    visited[nx][ny] = num
                    queue.append((nx, ny))
                    cnt += 1

    return cnt

num = 2
group = dict()

for i in range(n):
    for j in range(m):
        if graph[i][j] == 1 and not visited[i][j]:
            count = bfs(i, j)
            group[num] = count
            num += 1

answer = 0
for i in range(n):
    for j in range(m):
        if graph[i][j] == 0:
            s = set()
            for k in range(4):
                nx = i + dx[k]
                ny = j + dy[k]
                if 0 <= nx < n and 0 <= ny < m:
                    if visited[nx][ny] not in s and graph[nx][ny] == 1:
                        s.add(visited[nx][ny])
            res = 1
            for ss in s:
                res += group[ss]
            answer = max(answer, res)

print(answer)