from collections import deque

n, m = map(int, input().split())

ladder = dict()
for _ in range(n):
    x, y = map(int, input().split())
    ladder[x] = y

snakes = dict()
for _ in range(m):
    u, v = map(int, input().split())
    snakes[u] = v

graph = [0] * 101
visited = [0] * 101
q = deque()
q.append(1)

while q:
    x = q.popleft()

    if x == 100:
        print(graph[x])
        break
    for i in range(1, 7):
        next_place = x + i
        if next_place <= 100 and not visited[next_place]:
            if next_place in ladder.keys():
                next_place = ladder[next_place]
            if next_place in snakes.keys():
                next_place = snakes[next_place]
            if not visited[next_place]:
                visited[next_place] = 1
                graph[next_place] = graph[x] + 1
                q.append(next_place)