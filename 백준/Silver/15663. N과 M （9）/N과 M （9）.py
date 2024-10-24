n, m = map(int, input().split())
arr = list(map(int, input().split()))

arr.sort()
visited = [0] * n

def dfs(depth):
    if depth == m:
        temp = " ".join(map(str, box))
        if temp not in answer:
            answer.append(temp)
        return

    for i in range(n):
        if visited[i] == 0:
            visited[i] = 1
            box.append(arr[i])
            dfs(depth + 1)
            box.pop()
            visited[i] = 0

box = []
answer = []
dfs(0)

print("\n".join(answer))