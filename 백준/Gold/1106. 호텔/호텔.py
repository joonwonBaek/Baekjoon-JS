c, n = map(int, input().split())

customer = [list(map(int, input().split())) for _ in range(n)]
dp = [1e9]*(100+c)
dp[0] = 0

for i in range(n):
    cost, people = customer[i]
    for j in range(c):
        dp[j+people] = min(dp[j] + cost, dp[j+people])

print(min(dp[c:]))