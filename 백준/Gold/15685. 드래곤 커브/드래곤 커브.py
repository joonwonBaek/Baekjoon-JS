n = int(input())

board = [[0]*101 for _ in range(101)]

dy = [0, -1, 0, 1]
dx = [1, 0, -1, 0]

for _ in range(n):
    x, y, d, g = map(int, input().split())
    board[x][y] = 1
    curve = [d]
    for _ in range(g):
        for i in range(len(curve)-1, -1, -1):
            curve.append((curve[i]+1) % 4)

    for k in range(len(curve)):
        x = x + dx[curve[k]]
        y = y + dy[curve[k]]
        if 0 <= x < 101 and 0 <= y < 101:
            board[x][y] = 1

answer = 0
for i in range(100):
    for j in range(100):
        if board[i][j] and board[i+1][j] and board[i][j+1] and board[i+1][j+1]:
            answer += 1
print(answer)


