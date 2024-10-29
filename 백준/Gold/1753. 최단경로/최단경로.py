import heapq

v, e = map(int, input().split())
start = int(input())
INF = int(1e9)
graph = [[]*(v+1) for _ in range(v+1)]
for _ in range(e):
    a, b, dist = map(int, input().split())
    graph[a].append((b, dist))

heap = []
distance = [INF] * (v+1)
heapq.heappush(heap, (0, start))
distance[start] = 0
while heap:
    cur_dist, cur_v = heapq.heappop(heap)
    if cur_dist > distance[cur_v]:
        continue
    for next_v, next_dist in graph[cur_v]:
        temp = cur_dist + next_dist
        if temp < distance[next_v]:
            distance[next_v] = temp
            heapq.heappush(heap, (temp, next_v))

for i in range(1, v+1):
    if distance[i] == INF:
        print("INF")
    else:
        print(distance[i])