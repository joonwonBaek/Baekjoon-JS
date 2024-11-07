import sys

input = sys.stdin.readline
n, b = map(int, input().split())
graph = [list(map(int, input().split())) for _ in range(n)]

def multi(graph1, graph2):
    z = [[0]*n for _ in range(n)]
    for row in range(n):
        for col in range(n):
            for k in range(n):
                z[row][col] += (graph1[row][k] * graph2[k][col]) % 1000
    return z

def square(a, b):
    if b == 1:
        return a
    else:
        temp = square(a, b // 2)
        if b % 2 == 0:
            return multi(temp, temp)
        else:
            return multi(multi(temp, temp), a)
result = square(graph, b)

for i in range(n):
    for j in range(n):
        result[i][j] = result[i][j] % 1000

for k in result:
    print(*k)
