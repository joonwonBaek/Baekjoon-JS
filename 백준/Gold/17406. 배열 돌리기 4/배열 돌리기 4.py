from itertools import permutations
from copy import deepcopy
n, m, k = map(int, input().split())

arr = [list(map(int, input().split())) for _ in range(n)]
rcs = [list(map(int, input().split())) for _ in range(k)]

permutation = permutations(rcs, k)

answer = 1e9

for perm in permutation:
    temp = deepcopy(arr)
    for r, c, s in perm:
        r -= 1
        c -= 1
        for n in range(s, 0, -1):
            tmp1 = temp[r-n][c+n] # 오른쪽 위 가장자리
            tmp2 = temp[r+n][c-n] # 왼쪽 아래 가장자리
            # 왼쪽으로 이동
            temp[r+n][c-n:c+n] = temp[r+n][c-n+1:c+n+1]
            # 오른쪽으로 이동
            temp[r-n][c-n+1:c+n+1] = temp[r-n][c-n:c+n]
            # 위로 이동
            for row in range(r-n, r+n):
                temp[row][c-n] = temp[row+1][c-n]
            # 아래로 이동
            for row in range(r+n, r-n, -1):
                temp[row][c+n] = temp[row-1][c+n]
            temp[r-n+1][c+n] = tmp1
            temp[r+n-1][c-n] = tmp2
    for t in temp:
        answer = min(answer, sum(t))

print(answer)