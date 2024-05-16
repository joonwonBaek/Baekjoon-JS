k = int(input())
arr = list(input().split())

visited = [0] * 10
result = []

def dfs(depth, num):
    if depth == k:
        result.append(num)
        return

    for i in range(9, -1, -1):
        if arr[depth] == "<":
            if int(num[-1]) < i and visited[i] == 0:
                visited[i] = 1
                dfs(depth + 1, num + str(i))
                visited[i] = 0

        if arr[depth] == ">":
            if int(num[-1]) > i and visited[i] == 0:
                visited[i] = 1
                dfs(depth + 1, num + str(i))
                visited[i] = 0

for i in range(9, -1, -1):
    visited[i] = 1
    dfs(0, str(i))
    visited[i] = 0

print(result[0])
print(result[len(result)-1])