import heapq

t = int(input())

for _ in range(t):
    k = int(input())
    arr = list(map(int, input().split()))
    answer = 0
    heapq.heapify(arr)
    temp = 0
    while len(arr) >= 2:
        a = heapq.heappop(arr)
        b = heapq.heappop(arr)

        temp = a+b
        answer += temp

        heapq.heappush(arr, temp)
    print(answer)

