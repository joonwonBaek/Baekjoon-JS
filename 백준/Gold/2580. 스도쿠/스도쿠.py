graph = [list(map(int, input().split())) for _ in range(9)]

def row(x, a):
    for i in range(9):
        if a == graph[x][i]:
            return False
    return True

def col(y, a):
    for i in range(9):
        if a == graph[i][y]:
            return False
    return True

def square(x, y, a):
    nx = x // 3 * 3
    ny = y // 3 * 3
    for i in range(3):
        for j in range(3):
            if a == graph[nx+i][ny+j]:
                return False
    return True

def dfs(depth):
    if depth == len(blank):
        for idx in range(9):
            print(*graph[idx])
        exit(0)
    for i in range(1, 10):
        x = blank[depth][0]
        y = blank[depth][1]

        if row(x, i) and col(y, i) and square(x, y, i):
            graph[x][y] = i
            dfs(depth + 1)
            graph[x][y] = 0
blank = []
for i in range(9):
    for j in range(9):
        if graph[i][j] == 0:
            blank.append((i, j))

dfs(0)