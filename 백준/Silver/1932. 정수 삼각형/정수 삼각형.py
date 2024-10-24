n = int(input())
triangle = []
for _ in range(n):
    arr = list(map(int,input().split()))
    triangle.append(arr)

for i in range(1, n):
    for j in range(len(triangle[i])):
        if j == 0:
            triangle[i][j] += triangle[i-1][j]
        elif j == len(triangle[i]) - 1:
            triangle[i][j] += triangle[i-1][j-1]
        else:
            triangle[i][j] += max(triangle[i-1][j-1], triangle[i-1][j])
print(max(triangle[n-1]))