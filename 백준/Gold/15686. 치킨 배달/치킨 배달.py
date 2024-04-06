from itertools import combinations

N, M = map(int, input().split())

arr = []

for i in range(N):
    data = list(map(int, input().split()))
    arr.append(data)

chicken = []
house = []

for i in range(N):
    for j in range(N):
        if arr[i][j] == 1:
            house.append([i, j])
        elif arr[i][j] == 2:
            chicken.append([i, j])

# 치킨 집 중에서 m개 뽑는 조합
combination = list(combinations(chicken, M))

result = []
for comb in combination:
    answer = 0
    for hx, hy in house:
        temp = 1e9
        for [cx, cy] in comb:
            temp = min(temp, abs(hx-cx) + abs(hy-cy))
        answer += temp
    result.append(answer)

print(min(result))

