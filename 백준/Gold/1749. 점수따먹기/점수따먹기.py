n, m = map(int, input().split())
graph = [[0] * (m+1)]
dp = [[0]*(m+1) for _ in range(n+1)]
ans = -1e9

for _ in range(n):
    a = [0] + list(map(int, input().split()))
    graph.append(a)

for i in range(1, n+1):
    for j in range(1, m+1):
        temp = dp[i - 1][j] + dp[i][j - 1] + graph[i][j] - dp[i-1][j-1]
        dp[i][j] = temp

for x1 in range(1, n+1):
    for y1 in range(1, m+1):
        for x2 in range(x1, n+1):
            for y2 in range(y1, m+1):
                ans = max(ans, dp[x2][y2] - dp[x2][y1-1] - dp[x1-1][y2] + dp[x1-1][y1-1])

print(ans)