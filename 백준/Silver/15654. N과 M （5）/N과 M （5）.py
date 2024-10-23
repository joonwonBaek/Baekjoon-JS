n, m = map(int, input().split())
arr = list(map(int, input().split()))

arr.sort()

def dfs(depth):
    if depth == m:
        print(' '.join(map(str, box)))
        return

    for i in range(n):
        if arr[i] in box:
            continue
        box.append(arr[i])
        dfs(depth + 1)
        box.pop()

box = []
dfs(0)
