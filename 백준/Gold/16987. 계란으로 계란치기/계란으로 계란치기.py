n = int(input())

egg = []
for _ in range(n):
    s, w = map(int, input().split())
    egg.append([s, w])

answer = 0
def dfs(start):
    global answer
    if start == n:
        cnt = 0
        for s, _ in egg:
            if s <= 0:
                cnt +=1
        answer = max(answer, cnt)
        return

    if egg[start][0] <= 0:
        dfs(start+1)
        return
    check = True
    for i in range(n):
        if i == start:
            continue
        if egg[i][0] > 0:
            check = False
            break
    # 다 깨져있으면 dfs 종료
    if check:
        answer = max(answer, n-1)
        return

    # 계란 깨기
    for i in range(n):
        if i == start:
            continue
        if egg[i][0] < 0:
            continue
        egg[start][0] -= egg[i][1]
        egg[i][0] -= egg[start][1]
        dfs(start+1) # 깨지지 않는 경우 다시 복귀
        egg[start][0] += egg[i][1]
        egg[i][0] += egg[start][1]

dfs(0)
print(answer)