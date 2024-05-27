import heapq

n = int(input())

arr = []
for _ in range(n):
    a = int(input())
    heapq.heappush(arr, a)
answer = 0

while len(arr) > 1:
    a = heapq.heappop(arr)
    b = heapq.heappop(arr)

    temp = a + b
    answer += temp
    heapq.heappush(arr, temp)

print(answer)