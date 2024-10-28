from itertools import combinations
from copy import deepcopy
from collections import deque

n, m = map(int, input().split())
graph = [list(map(int, input().split())) for _ in range(n)]
zero_cnt = []
dir = [[1, 0], [-1, 0], [0, 1], [0, -1]]

def bfs(x, y):
    q = deque()
    q.append((x,y))

    while q:
        x, y = q.popleft()
        for dx, dy in dir:
            nx, ny = x + dx, y + dy
            if 0 <= nx < n and 0 <= ny < m:
                if copy_graph[nx][ny] == 0:
                    copy_graph[nx][ny] = 2
                    q.append((nx, ny))


for i in range(n):
    for j in range(m):
        if graph[i][j] == 0:
            zero_cnt.append([i, j])
walls = list(combinations(zero_cnt, 3))

answer = 0
for wall in walls:
    copy_graph = deepcopy(graph)
    temp = 0
    for w in wall:
        copy_graph[w[0]][w[1]] = 1
    for i in range(n):
        for j in range(m):
            if copy_graph[i][j] == 2:
                bfs(i, j)
    for copy in copy_graph:
        temp += copy.count(0)
    answer = max(answer, temp)

print(answer)