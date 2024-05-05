def solution(routes):
    answer = 0
    routes.sort(key=lambda x:(x[1]))
    key = -30001
    
    for route in routes:
        if key < route[0]:
            answer += 1
            key = route[1]
    return answer