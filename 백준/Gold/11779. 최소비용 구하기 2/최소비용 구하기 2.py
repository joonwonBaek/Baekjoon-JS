import sys
import heapq

n = int(input())
m = int(input())

graph = [[] for _ in range(n+1)]
visited = [0] * (n+1)
result = heap = [sys.maxsize]*(n+1)
parent = [i for i in range(n + 1)]
for _ in range(m):
    a, b, cost = map(int, input().split())
    graph[a].append((cost, b))

start, end = map(int, input().split())

def dijkstra(start):
    heap = []
    heapq.heappush(heap, (0, start))
    result[start] = 0
    while heap:
        cost, city = heapq.heappop(heap)
        # print(cost, city)
        if result[city] < cost:
            continue
        for ncost, ncity in graph[city]:
            if result[ncity] > cost + ncost:
                result[ncity] = cost + ncost
                heapq.heappush(heap, (result[ncity], ncity))
                parent[ncity] = city

dijkstra(start)
print(result[end])

temp = []
idx = end

while True:
    temp.append(idx)
    if idx == parent[idx]:
        break
    idx = parent[idx]
print(len(temp))
print(*reversed(temp))
