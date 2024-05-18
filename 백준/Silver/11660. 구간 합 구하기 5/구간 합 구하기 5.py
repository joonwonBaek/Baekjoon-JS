n, m = map(int, input().split())
graph = [[0]*(n+1)]

for _ in range(n):
    graph.append([0]+list(map(int, input().split())))

for i in range(1, n+1):
    for j in range(1, n+1):
        graph[i][j] += graph[i-1][j] + graph[i][j-1] - graph[i-1][j-1]
for _ in range(m):
    x1, y1, x2, y2 = map(int, input().split())

    result = graph[x2][y2] - graph[x2][y1-1] - graph[x1-1][y2] + graph[x1-1][y1-1]
    print(result)