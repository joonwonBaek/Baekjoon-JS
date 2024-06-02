n, m = map(int, input().split())
arr = list(map(int, input().split()))

start = max(arr)
end = sum(arr)
answer = 0

while start <= end:
    mid = (start + end) // 2
    count = 1
    temp = 0
    for a in arr:
        if temp + a > mid:
            count += 1
            temp = a
        else:
            temp += a

    if count > m:
        start = mid + 1
    else:
        end = mid - 1
        answer = mid

print(answer)