n = int(input())

ans = []
visited = [0]*(n+1)
def dfs(depth):
    if depth == n:
        print(' '.join(map(str, ans)))
        return

    for i in range(1, n+1):
        if visited[i]:
            continue
        visited[i] = 1
        ans.append(i)
        dfs(depth+1)
        ans.pop()
        visited[i] = 0

dfs(0)