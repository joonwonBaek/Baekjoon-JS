def dfs(idx, depth):
    if depth == 6:
        print(*answer)
        return

    for i in range(idx, n):
        answer.append(temp[i])
        dfs(i + 1, depth + 1)
        answer.pop()


while True:
    arr = list(map(int, input().split()))
    n = arr[0]
    temp = arr[1:]
    answer = []
    if arr[0] == 0:
        break

    dfs(0, 0)
    print()