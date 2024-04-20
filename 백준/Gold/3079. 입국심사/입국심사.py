n, m = map(int, input().split())

time = []
for _ in range(n):
    time.append(int(input()))

start = min(time)
end = max(time)*m
min_mid = end

while start <= end:
    mid = (start+end) // 2
    ans = 0

    for t in time:
        ans += mid//t

    if ans >= m:
        end = mid - 1
        min_mid = min(min_mid, mid)
    else:
        start = mid + 1

print(min_mid)