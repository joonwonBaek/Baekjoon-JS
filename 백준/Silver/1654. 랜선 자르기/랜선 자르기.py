k, n = map(int, input().split())

arr = []
for _ in range(k):
    arr.append(int(input()))

start = 1
end = max(arr)
max_mid = 0

while start <= end:
    mid = (start+end) // 2
    cnt = 0

    for a in arr:
        if a < mid:
            continue
        else:
            cnt += a//mid

    if cnt >= n:
        start = mid + 1
        max_mid = max(mid, max_mid)
    else:
        end = mid - 1

print(max_mid)





