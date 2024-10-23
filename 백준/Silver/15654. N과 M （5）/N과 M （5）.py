n, m = map(int, input().split())
arr = list(map(int, input().split()))

arr.sort()
answer = ''
visited = [0] * n

def dfs(depth, total):
    global answer
    if depth == m:
        print(total)
        return

    for i in range(n):
        if visited[i] == 0:
            visited[i] = 1
            dfs(depth + 1, total + " " + str(arr[i]))
            visited[i] = 0

for i in range(n):
    visited[i] = 1
    dfs(1, str(arr[i]))
    visited[i] = 0