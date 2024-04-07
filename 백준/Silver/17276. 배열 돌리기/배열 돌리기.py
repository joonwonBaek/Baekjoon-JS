from copy import deepcopy

t = int(input())

for _ in range(t):
    n, d = map(int, input().split())
    arr = []
    for _ in range(n):
        data = list(map(int, input().split()))
        arr.append(data)

    temp = [[0] * n for _ in range(n)]

    if d < 0:
        d = 360 + d

    if d == 360 or d == 0:
        for a in arr:
            print(*a)
    else:
        for _ in range(d // 45):
            for i in range(n):
                for j in range(n):
                    # 주 대각선
                    if i == j:
                        temp[i][j] = arr[n//2][j]

                    # 행
                    elif i == n//2:
                        temp[i][j] = arr[n-j-1][j]

                    # 부 대각선
                    elif i+j == n-1:
                        temp[i][j] = arr[i][n//2]

                    # 열
                    elif j == n//2:
                        temp[i][j] = arr[i][i]

                    else:
                        temp[i][j] = arr[i][j]
            arr = deepcopy(temp)
        for k in temp:
            print(*k)


