n, l = map(int, input().split())
result = 0
graph = [list(map(int, input().split())) for _ in range(n)]

def road(now):
    for i in range(1, n):
        if abs(now[i-1] - now[i]) > 1: # 1. 차이가 1만
            return 0
        if now[i-1] == now[i]:
            continue
        if now[i] < now[i-1]: # 2. 현재보다 이전이 큰 경우
            for j in range(l):
                if i+j >= n or used[i+j] or now[i+j] != now[i]:
                    return 0
                if now[i] == now[i+j]:
                    used[i+j] = 1 # 높이가 같으면 사용여부 체크
        elif now[i] > now[i-1]: # 3. 이전보다 현재가 큰 경우
            for j in range(l):
                if i-j-1 < 0 or used[i-j-1] or now[i-1] != now[i-j-1]:
                    return 0
                if now[i-j-1] == now[i-1]:
                    used[i-j-1] = 1
    return 1

for a in range(n):
    used = [0]*n
    if road(graph[a]):
        result += 1

for a in range(n):
    used = [0]*n
    temp = []
    for b in range(n):
        temp.append(graph[b][a])
    if road(temp):
        result += 1
print(result)