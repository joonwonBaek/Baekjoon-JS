n, s = map(int, input().split())

num = list(map(int, input().split()))
ans = []
cnt = 0

def dfs(depth):
    global cnt
    if sum(ans) == s and len(ans) > 0:
        cnt += 1

    for i in range(depth, n):
        ans.append(num[i])
        dfs(i+1)
        ans.pop()

dfs(0)
print(cnt)
