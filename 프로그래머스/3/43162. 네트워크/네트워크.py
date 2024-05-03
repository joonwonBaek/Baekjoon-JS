def solution(n, computers):
    answer = 0
    visited = [0] * n
    
    def dfs(com):
        visited[com] = 1
        for i in range(n):
            if i != com and visited[i] == 0 and computers[i][com] == 1:
                dfs(i)
    
    for com in range(n):
        if visited[com] == 0:
            dfs(com)
            answer += 1
    return answer