import heapq

def solution(n, works):
    answer = 0
    works = [-w for w in works]
    heapq.heapify(works)
    while n:
        n -= 1
        a = heapq.heappop(works)
        a += 1
        heapq.heappush(works, a)
    
    for w in works:
        if w >= 0:
            continue
        else:
            answer += w**2
    return answer