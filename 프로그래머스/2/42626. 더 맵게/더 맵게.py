import heapq

def solution(scoville, K):
    answer = 0
    heapq.heapify(scoville)
    while scoville[0] < K:
        a = heapq.heappop(scoville)
        b = heapq.heappop(scoville)
        temp = a+(b*2)
        heapq.heappush(scoville, temp)
        answer += 1
        
        if len(scoville) == 1 and scoville[0] < K:
            return -1
    
    return answer