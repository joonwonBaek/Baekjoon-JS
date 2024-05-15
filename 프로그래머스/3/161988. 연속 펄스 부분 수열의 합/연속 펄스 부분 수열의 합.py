def solution(sequence):
    answer = -1e9
    n = len(sequence)
    dp = [[0, 0] for _ in range(n)]
    dp[0][0], dp[0][1] = sequence[0], sequence[0]*-1
    
    answer = max(answer, max(dp[0]))
    
    for i in range(1, n):
        if i % 2 == 0:
            dp[i][0] = max(dp[i-1][0], 0) + sequence[i]
            dp[i][1] = max(dp[i-1][1], 0) + sequence[i]*-1
        else:
            dp[i][0] = max(dp[i-1][0], 0) + sequence[i]*-1
            dp[i][1] = max(dp[i-1][1], 0) + sequence[i]
        
        answer = max(answer, max(dp[i]))
    return answer