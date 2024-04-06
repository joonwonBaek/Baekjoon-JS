N, M = map(int, input().split())

arr = []
left = 0
bottom = 0

for i in range(N):
    data = list(map(int, input().split()))
    arr.append(data)

# 왼쪽
for i in range(N):
    for j in range(M):
        if j == 0:
            left += arr[i][j]
        else:
            if arr[i][j-1] < arr[i][j]:
                left += arr[i][j] - arr[i][j-1]

# 아래쪽
for j in range(M):
    for i in range(N):
        if i == 0:
            bottom += arr[i][j]
        else:
            if arr[i-1][j] < arr[i][j]:
                bottom += arr[i][j] - arr[i-1][j]

print((left+bottom+N*M)*2)
