n = int(input())
mp, mf, ms, mv = map(int, input().split())
food = [list(map(int, input().split())) for _ in range(n)]
visited = [0] * n
min_cost = 1e9
arr = []

def dfs(idx, p, f, s, v, c):
    global min_cost, arr

    if p >= mp and f >= mf and s >= ms and v >= mv:
        if min_cost > c:
            min_cost = c
            arr = [i+1 for i in range(n) if visited[i] == 1]
        return

    if idx == n:
        return

    np, nf, ns, nv, nc = food[idx]
    visited[idx] = 1
    dfs(idx+1, p+np, f+nf, s+ns, v+nv, c+nc)
    visited[idx] = 0
    dfs(idx+1, p, f, s, v, c)

dfs(0, 0, 0, 0, 0, 0)

if min_cost == 1e9:
    print(-1)
else:
    print(min_cost)
    print(*arr)