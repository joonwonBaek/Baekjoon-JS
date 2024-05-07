n, m = map(int, input().split())
graph = [[0]*(m+1)]
for _ in range(n):
    arr = list(map(int, input().split()))
    graph.append([0]+arr)

for i in range(1, n+1):
    for j in range(1, m+1):
        graph[i][j] += graph[i-1][j] + graph[i][j-1] - graph[i-1][j-1]

k = int(input())

for _ in range(k):
    x1, y1, x2, y2 = map(int, input().split())

    print(graph[x2][y2]-graph[x1-1][y2]-graph[x2][y1-1]+graph[x1-1][y1-1])