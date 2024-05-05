c = int(input())

for _ in range(c):
    player = [list(map(int, input().split())) for _ in range(11)]

    visited = [0] * 11
    max_num = 0
    def dfs(idx, total):
        global max_num

        if idx == 11:
            max_num = max(max_num, total)
            return

        for i in range(len(player[idx])):
            if visited[i] == 0 and player[idx][i] != 0:
                visited[i] = 1
                dfs(idx + 1, total + player[idx][i])
                visited[i] = 0

    dfs(0, 0)
    print(max_num)