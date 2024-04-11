n, m = map(int, input().split())

r, c, d = map(int, input().split())

graph = [list(map(int, input().split())) for _ in range(n)]

dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

visited = [[0] * m for _ in range(n)]
visited[r][c] = 1
count = 1

while True:
    flag = 0
    for _ in range(4):
        d = (d+3) % 4
        nx = r + dx[d]
        ny = c + dy[d]

        if 0 <= nx < n and 0 <= ny < m and graph[nx][ny] == 0:
            if visited[nx][ny] == 0:
                visited[nx][ny] = 1
                count += 1
                r, c = nx, ny
                flag = 1
                break
    if flag == 0:
        nx = r - dx[d]
        ny = c - dy[d]
        if graph[nx][ny] == 1:
            print(count)
            break
        else:
            r, c = nx, ny