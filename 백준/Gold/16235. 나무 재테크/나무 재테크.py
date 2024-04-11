n, m, k = map(int, input().split())

graph = [list(map(int, input().split())) for _ in range(n)]
energy = [[5]*n for _ in range(n)] # 양분 모든 칸에 5씩
tree = [[[] for _ in range(n)] for _ in range(n)]

dx = [0, -1, -1, -1, 0, 1, 1, 1]
dy = [-1, -1, 0, 1, 1, 1, 0, -1]

for _ in range(m):
    x, y, z = map(int, input().split())
    tree[x-1][y-1].append(z)

for _ in range(k):
    # 봄
    for i in range(n):
        for j in range(n):
            if tree[i][j]:
                tree[i][j].sort()
                temp = 0
                index = 0
                for d in range(len(tree[i][j])):
                    if energy[i][j] >= tree[i][j][d]:
                        energy[i][j] -= tree[i][j][d]
                        tree[i][j][d] += 1
                        index = d+1
                    # 여름 - 죽은 나무가 양분으로 변함
                    else:
                        temp += tree[i][j][d]//2
                energy[i][j] += temp
                tree[i][j] = tree[i][j][:index]
    # 가을
    for i in range(n):
        for j in range(n):
            if tree[i][j]:
                for d in tree[i][j]:
                    if d % 5 == 0:
                        for k in range(8):
                            nx = i + dx[k]
                            ny = j + dy[k]
                            if 0 <= nx < n and 0 <= ny < n:
                                tree[nx][ny].append(1)
    # 겨울
    for i in range(n):
        for j in range(n):
            energy[i][j] += graph[i][j]

answer = 0
for i in range(n):
    for j in range(n):
        if tree[i][j]:
            answer += len(tree[i][j])
print(answer)

