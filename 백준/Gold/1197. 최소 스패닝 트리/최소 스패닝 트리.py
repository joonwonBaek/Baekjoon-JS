import heapq

v, e = map(int, input().split())

visited = [0] * (v+1)
graph = [[] for _ in range(v+1)]

for _ in range(e):
    a, b, c = map(int, input().split())
    graph[a].append([c, b])
    graph[b].append([c, a])

def prim(start):
    heap = []
    heapq.heappush(heap, [0, start])
    answer = 0
    cnt = 0

    while cnt < v:
        n_cost, n_node = heapq.heappop(heap)
        if visited[n_node]: continue
        visited[n_node] = 1
        answer += n_cost
        cnt += 1
        for next_cost, next_node in graph[n_node]:
            heapq.heappush(heap, [next_cost, next_node])
    return answer

print(prim(1))
