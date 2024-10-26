from collections import deque

n, k = map(int, input().split())
visited = [0] * 100001
q = deque()
q.append(n)
visited[n] = 1
answer = 0

while q:
    value = q.popleft()
    if value == k:
        break

    for now in (value * 2, value-1, value + 1):
        if now < 0 or now > 100000:
            continue
        if visited[now]:
            continue

        if now == value * 2:
            visited[now] = visited[value]
        else:
            visited[now] = visited[value] + 1
        q.append(now)
print(visited[k]-1)