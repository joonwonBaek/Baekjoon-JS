from collections import deque

n = int(input())
graph = [[]*(n+1) for _ in range(n+1)]
visited = [0] * (n+1)


for _ in range(n-1):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

q = deque()
q.append(1)

while q:
    now = q.popleft()
    for next in graph[now]:
        if visited[next] == 0:
            visited[next] = now
            q.append(next)

for i in range(2, n+1):
    print(visited[i])