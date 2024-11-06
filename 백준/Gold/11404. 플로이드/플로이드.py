n = int(input())
m = int(input())
graph = [[int(1e9)] * (n+1) for _ in range(n+1)]
for i in range(1, n+1):
    graph[i][i] = 0
for _ in range(m):
    a, b, cost = map(int, input().split())
    graph[a][b] = min(graph[a][b], cost)

for k in range(1, n+1):
    for a in range(1, n+1):
        for b in range(1, n+1):
            graph[a][b] = min(graph[a][b], graph[a][k] + graph[k][b])

for x in range(1, n+1):
    for y in range(1, n+1):
        if graph[x][y] == int(1e9):
            print(0, end=" ")
        else:
            print(graph[x][y], end = " ")
    print()

