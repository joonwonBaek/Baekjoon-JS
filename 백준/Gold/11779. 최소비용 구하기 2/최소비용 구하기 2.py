import heapq
import sys

input = sys.stdin.readline

INF = sys.maxsize

n = int(input())
m = int(input())

graph = [[] for _ in range(n+1)]
for _ in range(m):
    a, b, cost = map(int, input().split())
    graph[a].append((b, cost))

start, end = map(int, input().split())
heap = [(start, 0)]
costs = [INF] * (n+1)
node = [0] * (n+1)

while heap:
    cur_v, cur_cost = heapq.heappop(heap)
    if cur_cost > costs[cur_v]:
        continue

    if cur_v == start:
        costs[cur_v] = 0

    for next_v, next_cost in graph[cur_v]:
        cost = next_cost + cur_cost
        if cost < costs[next_v]:
            costs[next_v] = cost
            heapq.heappush(heap, (next_v, cost))
            node[next_v] = cur_v

temp = end
answer = []
while temp:
    answer.append(temp)
    temp = node[temp]

answer.reverse()

print(costs[end])
print(len(answer))
print(" ".join(map(str, answer)))