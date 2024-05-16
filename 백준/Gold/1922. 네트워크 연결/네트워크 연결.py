import heapq

n = int(input())
m = int(input())
visited = [0] * (n+1)
graph = [[] for _ in range(n+1)]
for _ in range(m):
    a, b, cost = map(int, input().split())
    graph[a].append([cost, b])
    graph[b].append([cost, a])

def prim(start):
    heap = []
    w_sum = 0
    heapq.heappush(heap, (0, start))

    while heap:
        w, node = heapq.heappop(heap)
        if visited[node] == 0:
            visited[node] = 1
            w_sum += w
            for n in graph[node]:
                if visited[n[1]] == 0:
                    heapq.heappush(heap, n)

    return w_sum


print(prim(1))
    