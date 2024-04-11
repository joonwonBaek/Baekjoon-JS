n, m, r = map(int, input().split())

arr = [list(map(int, input().split())) for _ in range(n)]

def rotate(i, j, n, m):
    top = arr[i][j]
    left = arr[n-1][j]
    bottom = arr[n-1][m-1]
    right = arr[i][m-1]
    # left
    for x in range(n-1, i, -1):
        arr[x][j] = arr[x-1][j]
    # right
    for x in range(i, n-1):
        arr[x][m-1] = arr[x+1][m-1]
    # top
    for y in range(j, m-1):
        arr[i][y] = arr[i][y+1]
    # bottom
    for y in range(m-1, j, -1):
        arr[n-1][y] = arr[n-1][y-1]
    arr[i+1][j] = top
    arr[n-1][j+1] = left
    arr[n-2][m-1] = bottom
    arr[i][m-2] = right

deep = min(n,m) // 2
cycle = (n-1)*2 + (m-1)*2

for i in range(deep):
    for _ in range(r % cycle):
        rotate(i, i, n-i, m-i)
    cycle -= 8 # 겉껍질과 안쪽의 차이

for a in arr:
    print(*a)