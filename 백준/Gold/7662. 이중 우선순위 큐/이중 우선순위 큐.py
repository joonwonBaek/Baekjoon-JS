import heapq
import sys

def isEmpty(numbers):
    for item in numbers:
        if item[1] > 0:
            return False
    return True

t = int(sys.stdin.readline())

for _ in range(t):
    k = int(sys.stdin.readline())
    max_heap = []
    min_heap = []
    check = [1]*k
    for i in range(k):
        a, b = sys.stdin.readline().split()
        b = int(b)
        if a == 'I':
            heapq.heappush(min_heap, (b, i))
            heapq.heappush(max_heap, (-b, i))

        else:
            if b == -1:
                if min_heap:
                    check[heapq.heappop(min_heap)[1]] = 0
            elif b == 1:
                if max_heap:
                    check[heapq.heappop(max_heap)[1]] = 0
        while min_heap and check[min_heap[0][1]] == 0:
            heapq.heappop(min_heap)
        while max_heap and check[max_heap[0][1]] == 0:
            heapq.heappop(max_heap)

    if min_heap == [] and max_heap == []:
        print("EMPTY")
    else:
        print(-max_heap[0][0], min_heap[0][0])


