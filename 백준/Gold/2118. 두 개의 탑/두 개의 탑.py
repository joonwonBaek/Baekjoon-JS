n = int(input())
arr = [int(input()) for _ in range(n)]
temp = [0]*(n+1)
for i in range(1, n+1):
    temp[i] = arr[i-1] + temp[i-1]

start = 1
end = 1

answer = 0

while start < n and end <= n:
    a = temp[end-1] - temp[start-1]
    b = temp[n] - a

    result = min(a, b)
    answer = max(answer, result)
    if a < b:
        end += 1
    else:
        start += 1
print(answer)