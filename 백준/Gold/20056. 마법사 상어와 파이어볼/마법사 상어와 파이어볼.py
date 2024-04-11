n, m, k = map(int, input().split())

dy = [0, 1, 1, 1, 0, -1, -1, -1]
dx = [-1, -1, 0, 1, 1, 1, 0, -1]

arr = [[[] for _ in range(n)] for _ in range(n)]
# i번 파이어볼
for _ in range(m):
    r, c, m, s, d = map(int, input().split())
    arr[r-1][c-1].append([m, s, d])

# 파이어볼 이동
for _ in range(k):
    shark = [[[] for _ in range(n)] for _ in range(n)]
    for i in range(n):
        for j in range(n):
            if arr[i][j] != []:
                for m, s, d in arr[i][j]:
                    nx = (i + dx[d]*s) % n
                    ny = (j + dy[d]*s) % n
                    shark[nx][ny].append([m, s, d])

# 이동한 파이어볼 확인
    for i in range(n):
        for j in range(n):
            if len(shark[i][j]) >= 2:
                mass = 0
                speed = 0
                check1 = 0
                check2 = 0
                for m, s, d in shark[i][j]:
                    mass += m
                    speed += s
                    if (d % 2) == 1: check1 += 1
                    if (d % 2) == 0: check2 += 1
                mass //= 5
                if mass == 0:
                    shark[i][j] = []
                    continue
                speed //= len(shark[i][j])
                if check1 == len(shark[i][j]) or check2 == len(shark[i][j]):
                    shark[i][j] = []
                    for d in [0, 2, 4, 6]:
                        shark[i][j].append([mass, speed, d])
                else:
                    shark[i][j] = []
                    for d in [1, 3, 5, 7]:
                        shark[i][j].append([mass, speed, d])
    arr = [lst[:] for lst in shark]

result = 0

for i in range(n):
    for j in range(n):
        if arr[i][j] != []:
            for m, s, d in arr[i][j]:
                result += m

print(result)