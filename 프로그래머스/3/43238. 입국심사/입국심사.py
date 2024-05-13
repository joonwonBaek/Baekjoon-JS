def solution(n, times):
    answer = 1e9
    start = min(times)
    end = max(times) * n
    
    while start <= end:
        mid = (start + end) // 2
        temp = 0
        for t in times:
            temp += (mid // t)
        
        if temp >= n:
            end = mid - 1
            answer = mid
        else:
            start = mid + 1
    return answer