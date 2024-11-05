from collections import deque

n, k = map(int, input().split())

q = deque()
q.append(n)
distance = [0] * 100001
cnt, result = 0, 0

while q:
    now = q.popleft()
    temp = distance[now]

    if now == k:
        result = temp
        cnt += 1
        continue

    for i in [now-1, now+1, now*2]:
        if 0 <= i < 100001 and (distance[i] == 0 or distance[i] == distance[now] + 1):
            distance[i] = distance[now] + 1
            q.append(i)

print(result)
print(cnt)