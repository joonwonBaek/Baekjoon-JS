n, k = map(int, input().split())

arr = []
for _ in range(n):
    arr.append(int(input()))

dp = [100001] * (k+1)
dp[0] = 0

for a in arr:
    for i in range(a, k+1):
        dp[i] = min(dp[i-a]+1, dp[i])

if dp[k] == 100001:
    print(-1)
else:
    print(dp[k])