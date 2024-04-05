N, M, R = map(int, input().split())

arr = []
for i in range(N):
    data = list(map(int, input().split()))
    arr.append(data)

for _ in range(R):
    for r in range(min(N,M)//2):
        x = r
        y = r
        prev_value = arr[y][x]
        # 좌
        for d in range(r+1, N-r):
            y = d
            next_value = arr[y][x]
            arr[y][x] = prev_value
            prev_value = next_value
        # 하
        for d in range(r+1, M-r):
            x = d
            next_value = arr[y][x]
            arr[y][x] = prev_value
            prev_value = next_value
        # 우
        for d in range(r+1, N-r):
            y = N-d-1
            next_value = arr[y][x]
            arr[y][x] = prev_value
            prev_value = next_value
        # 상
        for d in range(r+1, M-r):
            x = M-d-1
            next_value = arr[y][x]
            arr[y][x] = prev_value
            prev_value = next_value

for i in range(N):
    for j in range(M):
        print(arr[i][j], end=' ')
    print()

