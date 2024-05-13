import heapq

def solution(n, costs):
    answer = 0
    graph = [[] for _ in range(n)]
    heap = []
    visited = [0] * n
    
    for c in costs:
        s, e, w = c
        graph[s].append([w, e])
        graph[e].append([w, s])
        
    def prim(start):
        sum_w = 0
        heapq.heappush(heap, [0, start])
        
        while heap:
            w, node = heapq.heappop(heap)
            
            if visited[node] == 0:
                visited[node] = 1
                sum_w += w
                for edge in graph[node]:
                    if visited[edge[1]] == 0:
                        heapq.heappush(heap, edge)
        return sum_w
    return prim(0)