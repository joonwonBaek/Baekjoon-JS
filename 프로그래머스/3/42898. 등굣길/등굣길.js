function solution(m, n, puddles) {
    var answer = 0;
    const dp = Array.from(new Array(n+1), () => new Array(m+1).fill(0))
    dp[1][1] = 1
    for(const [x, y] of puddles) {
        dp[y][x] = -1
    }
    for(let i = 1; i<=n; i++) {
        for(let j = 1; j <=m; j++) {
            if(dp[i][j] == -1) {
                continue
            } else {
                if(dp[i-1][j] === -1) {
                    dp[i][j] += dp[i][j-1]%1000000007
                } else if(dp[i][j-1] === -1) {
                    dp[i][j] += dp[i-1][j]%1000000007
                } else {
                    dp[i][j] += (dp[i-1][j] + dp[i][j-1])%1000000007
                }
            }
        }
    }
    return dp[n][m];
}