import heapq
from collections import defaultdict

n = int(input())
min_heap = []
max_heap = []
solved = defaultdict(int)
for _ in range(n):
    a, b = map(int, input().split())
    heapq.heappush(min_heap, (b, a))
    heapq.heappush(max_heap, (-b, -a))
m = int(input())
for _ in range(m):
    arr = list(input().split())
    if arr[0] == "recommend":
        if arr[1] == "1":
            while solved[abs(max_heap[0][1])] != 0:
                solved[abs(max_heap[0][1])] -= 1
                heapq.heappop(max_heap)
            print(-max_heap[0][1])
        else:
            while solved[min_heap[0][1]] != 0:
                solved[min_heap[0][1]] -= 1
                heapq.heappop(min_heap)
            print(min_heap[0][1])
    elif arr[0] == "add":
        p, l = int(arr[1]), int(arr[2])
        heapq.heappush(min_heap, (l, p))
        heapq.heappush(max_heap, (-l, -p))
    else:
        solved[int(arr[1])] += 1