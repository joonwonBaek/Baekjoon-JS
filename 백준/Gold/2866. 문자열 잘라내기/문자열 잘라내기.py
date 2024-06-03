r, c = map(int, input().split())
arr = [input() for _ in range(r)]

start = 0
end = r
answer = 0

while start <= end:
    mid = (start + end) // 2
    temp = [""]*c
    for i in range(mid, r):
        for j in range(c):
            temp[j] += arr[i][j]

    if len(set(temp)) >= c:
        answer = mid
        start = mid + 1
    else:
        end = mid - 1

print(answer)