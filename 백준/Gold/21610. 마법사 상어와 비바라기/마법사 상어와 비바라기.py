n, m = map(int, input().split())

dir = [
    [0, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1]
]

cross = [
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1]
]

basket = []

basket = [list(map(int, input().split())) for _ in range(n)]
data = [list(map(int, input().split())) for _ in range(m)]

# steo1. 처음 구름 좌표 저장
clouds = [(n-1, 0), (n-1, 1), (n-2, 0), (n-2, 1)]

# step2
direction = []
for d, s in data:
    temp = []
    visit = [[0]*n for _ in range(n)]
    for x, y in clouds:
        nx = (x + dir[d-1][0] * s) % n
        ny = (y + dir[d-1][1] * s) % n
        basket[nx][ny] += 1
        temp.append((nx, ny))
        visit[nx][ny] = 1

    # step4
    for x, y in temp:
        cnt = 0
        for c in cross:
            nx = x + c[0]
            ny = y + c[1]
            if 0 <= nx < n and 0 <= ny < n:
                if basket[nx][ny]:
                    cnt += 1
        basket[x][y] += cnt

    clouds = []

    # step 5
    for i in range(n):
        for j in range(n):
            if visit[i][j] or basket[i][j] < 2:
                continue
            basket[i][j] -= 2
            clouds.append((i, j))

answer = 0
for a in basket:
    answer += sum(a)

print(answer)



