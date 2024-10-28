from itertools import combinations

n, m = map(int, input().split())
graph = [list(map(int, input().split())) for _ in range(n)]
house = []
chicken = []
answer = 1e9

for i in range(n):
    for j in range(n):
        if graph[i][j] == 1:
            house.append([i, j])
        if graph[i][j] == 2:
            chicken.append([i, j])

chickens = combinations(chicken, m)

for chi in chickens:
    result = 0;
    for hx, hy in house:
        temp = 1e9
        for cx, cy in chi:
            temp = min(temp, abs(hx - cx) + abs(hy - cy))
        result += temp
    answer = min(result, answer)
print(answer)