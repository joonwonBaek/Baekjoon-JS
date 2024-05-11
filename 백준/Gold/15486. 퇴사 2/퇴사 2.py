n = int(input())

graph = [list(map(int, input().split())) for _ in range(n)]
dp = [0]*(n+1)

for i in range(1, n+1):
    t, p = graph[i-1]
    temp = i+t-1
    dp[i] = max(dp[i], dp[i-1])
    if temp <= n:
        dp[temp] = max(dp[temp], dp[i-1]+p)

print(dp[n])