import heapq

n, e = map(int, input().split())
graph = [[]*(n+1) for _ in range(n+1)]
INF = int(1e9)

def dijkstra(start, end):
    distance = [INF] * (n+1)
    distance[start] = 0
    heap = [[0, start]]
    while heap:
        cur_dist, cur_v = heapq.heappop(heap)
        if cur_dist > distance[cur_v]:
            continue
        for next_v, next_dist in graph[cur_v]:
            temp = next_dist + cur_dist
            if temp < distance[next_v]:
                distance[next_v] = temp
                heapq.heappush(heap, [temp, next_v])
    return distance[end]
for _ in range(e):
    a, b, c = map(int, input().split())
    graph[a].append((b, c))
    graph[b].append((a, c))
start, end = map(int, input().split())

path1 = dijkstra(1, start) + dijkstra(start, end) + dijkstra(end, n)
path2 = dijkstra(1, end) + dijkstra(end, start) + dijkstra(start, n)

if path1 >= INF and path2 >= INF:
    print(-1)
else:
    print(min(path1, path2))
