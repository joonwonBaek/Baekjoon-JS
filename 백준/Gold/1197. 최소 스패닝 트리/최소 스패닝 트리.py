import heapq

v, e = map(int, input().split())
visited = [0]*(v+1)
heap = []

graph = [[] for _ in range(v+1)]
for _ in range(e):
    a, b, c = map(int, input().split())
    graph[a].append([c, b])
    graph[b].append([c, a])

def prim(start):
    heapq.heappush(heap, [0, start])
    weight = 0
    while heap:
        w, node = heapq.heappop(heap)

        if visited[node] == 0:
            visited[node] = 1
            weight += w
            for edge in graph[node]:
                if visited[edge[1]] == 0:
                    heapq.heappush(heap, edge)
    return weight

print(prim(1))

