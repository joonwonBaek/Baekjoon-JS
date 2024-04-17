n = int(input())

graph = [[] for _ in range(n+1)]

for i in range(1, n+1):
    data = int(input())
    graph[i].append(data)

def dfs(start):
    global ans, cnt
    visited[start] = 1

    for now in graph[start]:
        if visited[now] == 0:
            dfs(now)
        elif visited[now] == 1 and finished[now] == 0:
            if now not in ans:
                cnt += 1
                ans.append(now)
                return
        else:
            return
    finished[start] = 1

ans = []
cnt = 0

for i in range(1, n+1):
    visited = [0] * (n+1)
    finished = [0] * (n+1)
    dfs(i)

ans.sort()

print(cnt)
for a in ans:
    print(a)