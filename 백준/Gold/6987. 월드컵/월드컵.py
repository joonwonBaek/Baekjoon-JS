ans = []
for _ in range(4):
    arr = list(map(int, input().split()))
    match = []
    result = []

    # step1. match 경우의 수
    for i in range(6):
        for j in range(i+1, 6):
            match.append([i, j])

    # step2. 주어진 경기 결과 다시 저장
    for i in range(6):
        result.append(arr[i*3:i*3+3])

    def dfs(start):
        global cnt
        if start == 15:
            cnt = 1
            for r in result:
                if r.count(0) != 3:
                    cnt = 0
                    break
            return

        one, two = match[start]
        for x, y in ((0, 2), (1, 1), (2, 0)):
            if result[one][x] > 0 and result[two][y] > 0:
                result[one][x] -= 1
                result[two][y] -= 1
                dfs(start + 1)
                result[one][x] += 1
                result[two][y] += 1

    cnt = 0
    dfs(0)
    ans.append(cnt)
print(*ans)