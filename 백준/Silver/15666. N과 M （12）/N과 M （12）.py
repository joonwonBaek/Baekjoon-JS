n, m = map(int, input().split())
arr = sorted(set(list(map(int, input().split()))))

ans = []


def dfs(depth, idx):
    if depth == m:
        print(' '.join(map(str, ans)))
        return
    for i in range(idx, len(arr)):
        ans.append(arr[i])
        dfs(depth + 1, i)
        ans.pop()

dfs(0, 0)