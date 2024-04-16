import heapq

n = int(input())

arr = [list(map(int, input().split())) for _ in range(n)]
arr.sort(key=lambda x: (x[0]))

answer = []
heapq.heappush(answer, arr[0][1])

for i in range(1, n):
    if arr[i][0] >= answer[0]:
        heapq.heappop(answer)
    heapq.heappush(answer, arr[i][1])

print(len(answer))