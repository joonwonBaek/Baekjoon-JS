n, m = map(int, input().split())

arr = list(map(int, input().split()))

start = 1
end = max(arr)
max_mid = 0

while start <= end:
    mid = (start+end) // 2
    length = 0

    for a in arr:
        if mid > a:
            continue
        else:
            length += a-mid

    if  length >= m:
        start = mid + 1
        max_mid = max(mid, max_mid)
    else:
        end = mid - 1

print(max_mid)

