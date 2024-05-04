def solution(n, s):
    answer = []
    
    if s // n == 0:
        return [-1]
    else:
        while n >= 1:
            a = s // n
            answer.append(a)
            s -= a
            n -= 1
        return answer