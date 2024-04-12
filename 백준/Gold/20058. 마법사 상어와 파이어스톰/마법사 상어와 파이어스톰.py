from collections import deque

n, q = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(2**n)]
level = list(map(int, input().split()))

dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]

def rotate(l): # 시계 방향 90도 회전
    global arr
    result = [[0]*(2**n) for _ in range(2**n)]
    for x in range(0, 2**n, l):
        for y in range(0, 2**n, l):
            for i in range(l):
                for j in range(l):
                    result[x+i][y+j] = arr[x+(l-1-j)][y+i]
    return result

def melting_ice(graph):
    temp = []
    for i in range(2**n):
        for j in range(2**n):
            if graph[i][j]:
                cnt = 0
                for k in range(4):
                    nx = i + dx[k]
                    ny = j + dy[k]
                    if 0 <= nx < 2 ** n and 0 <= ny < 2 ** n:
                        if graph[nx][ny]:
                            cnt += 1
                if cnt < 3:
                    temp.append((i,j))
    for i, j in temp:
        graph[i][j] -= 1

    return graph

def bfs(i, j, visit):
    global cnt_ice
    queue = deque()
    queue.append((i,j))
    cnt = 1
    visit[i][j] = 1

    while queue:
        x, y = queue.popleft()
        for k in range(4):
            nx = x + dx[k]
            ny = y + dy[k]
            if 0 <= nx < 2**n and 0 <= ny < 2**n and visit[nx][ny] == 0:
                if arr[nx][ny]:
                    cnt += 1
                    visit[nx][ny] = 1
                    queue.append((nx, ny))
    cnt_ice = max(cnt_ice, cnt)
    return cnt_ice

# 레벨별로 단계 진행
for l in level:
    arr = rotate(2**l)
    arr = melting_ice(arr)

sum_ice = 0
cnt_ice = 0
visit = [[0] * (2 ** n) for _ in range(2 ** n)]

for i in range(2 ** n): # 얼음 개수의 총합
    for j in range(2 ** n):
        if arr[i][j]:
            sum_ice += arr[i][j]
            if visit[i][j] == 0:
                cnt_ice = bfs(i, j, visit)

if cnt_ice == 1:
    cnt_ice = 0

print(sum_ice)
print(cnt_ice)
