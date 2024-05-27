n, m = map(int, input().split())
graph = [list(map(int, input().split())) for _ in range(n)]

boomerang = [[(1, 0), (0, -1)], [(-1, 0), (0, -1)], [(-1, 0), (0, 1)], [(1, 0), (0, 1)]]
visited = [[0]*m for _ in range(n)]
answer = 0

def dfs(i, j, result):
    global answer
    if j == m:
        i += 1
        j = 0
    if i == n:
        answer = max(answer, result)
        return

    if visited[i][j] == 0:
        for b in boomerang:
            x1, y1 = i + b[0][0], j + b[0][1]
            x2, y2 = i + b[1][0], j + b[1][1]
            if 0 <= i < n and 0 <= x1 < n and 0 <= x2 < n and 0 <= j < m and 0 <= y1 < m and 0 <= y2 < m:
                if visited[x1][y1] == 0 and visited[x2][y2] == 0:
                    visited[x1][y1] = visited[x2][y2] = visited[i][j] = 1
                    dfs(i, j + 1, result + graph[x1][y1] + graph[x2][y2] + graph[i][j] * 2)
                    visited[x1][y1] = visited[x2][y2] = visited[i][j] = 0
    dfs(i, j + 1, result)

dfs(0, 0, 0)
print(answer)