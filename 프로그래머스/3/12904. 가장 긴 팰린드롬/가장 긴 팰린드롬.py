def solution(s):
    answer = 0
    n = len(s)
    dp = [0] * n
    dp[0] = 1
    
    for i in range(1, n):
        for j in range(i):
            temp = s[j:i+1]
            if temp == temp[::-1]:
                dp[i] = max(dp[i], len(temp))
    
    return max(dp)