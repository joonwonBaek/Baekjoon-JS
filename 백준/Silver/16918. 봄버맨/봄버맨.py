r, c, n = map(int, input().split())

graph = [list(input()) for _ in range(r)]
bomb = [["O"]*c for _ in range(r)]
dx = [1, -1, 0, 0]
dy = [0, 0, -1, 1]
if n <= 1:
    for g in graph:
        print(''.join(g))
elif n % 2 == 0:
    for b in bomb:
        print(''.join(b))
else:
    temp = [b[:] for b in bomb]
    for i in range(r):
        for j in range(c):
            if graph[i][j] == 'O':
                temp[i][j] = '.'
                for k in range(4):
                    nx = i + dx[k]
                    ny = j + dy[k]
                    if 0 <= nx < r and 0 <= ny <c:
                        temp[nx][ny] = '.'
    temp1 = [b[:] for b in bomb]
    for i in range(r):
        for j in range(c):
            if temp[i][j] == 'O':
                temp1[i][j] = '.'
                for k in range(4):
                    nx = i + dx[k]
                    ny = j + dy[k]
                    if 0 <= nx < r and 0 <= ny < c:
                        temp1[nx][ny] = '.'
    if n % 4 == 3:
        for t in temp:
            print(''.join(t))
    if n % 4 == 1:
        for t in temp1:
            print(''.join(t))