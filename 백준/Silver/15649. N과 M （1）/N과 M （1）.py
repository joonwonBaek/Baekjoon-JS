n, m = map(int, input().split())

result = []
visited = [0] * (n+1)
def dfs(depth):
    if depth == m:
        print(' '.join(map(str, result)))
        return
    
    for i in range(1, n+1):
        if visited[i] == 1:
            continue
        result.append(i)
        visited[i] = 1
        dfs(depth+1)
        result.pop()
        visited[i] = 0

dfs(0)