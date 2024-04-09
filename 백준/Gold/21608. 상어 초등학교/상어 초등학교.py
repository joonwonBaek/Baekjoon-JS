n = int(input())

classroom = [[0]*n for _ in range(n)]
like_room = [[] for _ in range(n*n+1)]

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

for _ in range(n*n):
    arr = list(map(int, input().split()))
    like = arr[1:]
    like_room[arr[0]] = like

    temp = []
    for i in range(n):
        for j in range(n):
            sum_like = 0
            sum_zero = 0
            if classroom[i][j] != 0:
                continue
            for k in range(4):
                nx = i + dx[k]
                ny = j + dy[k]

                if 0 <= nx < n and 0 <= ny < n:
                    if classroom[nx][ny] in like:
                        sum_like += 1
                    if classroom[nx][ny] == 0:
                        sum_zero += 1
            temp.append((sum_like, sum_zero, i, j))
    temp.sort(key=lambda x:(-x[0], -x[1], x[2], x[3]))
    classroom[temp[0][2]][temp[0][3]] = arr[0]

result = 0
for i in range(n):
    for j in range(n):
        answer = 0
        for k in range(4):
            nx = i+dx[k]
            ny = j+dy[k]
            if 0 <= nx < n and 0 <= ny < n:
                if classroom[nx][ny] in like_room[classroom[i][j]]:
                    answer += 1
        if answer != 0:
            result += 10**(answer-1)
print(result)