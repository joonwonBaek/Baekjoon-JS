from collections import deque

n, m = map(int, input().split())
ans = []
result = []
graph = [[] for _ in range(n+1)]
for _ in range(m):
    a, b = map(int, input().split())
    graph[b].append(a)

def bfs(v):
    queue = deque()
    queue.append(v)
    visited = [0] * (n + 1)
    visited[v] = 1
    cnt = 1
    while queue:
        i = queue.popleft()
        for j in graph[i]:
            if visited[j] == 0:
                queue.append(j)
                visited[j] = 1
                cnt += 1
    return cnt

for i in range(1, n+1):
    cnt = bfs(i)
    ans.append(cnt)

max_cnt = max(ans)

for i in range(1, n+1):
    if max_cnt == ans[i-1]:
        result.append(i)

print(*result)