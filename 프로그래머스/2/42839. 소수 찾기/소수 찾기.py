def solution(numbers):
    answer = 0

    n = len(numbers)
    num_uniq = set()
    visited = [0]*n
    
    def dfs(numbers, depth, num):
        if depth == n:
            return
        for i in range(n):
            if visited[i] == 0:
                num += numbers[i]
                visited[i] = 1
                num_uniq.add(int(num))
                dfs(numbers, depth+1, num)
                num = num[:-1]
                visited[i] = 0
            
    def is_prime(num):
        if num <= 1:
            return False
        for n in range(2, int(num**0.5)+1):
            if num % n == 0:
                return False
        return True
    
    dfs(numbers, 0, "")
    
    for n in list(num_uniq):
        if is_prime(n):
            answer += 1
            
    return answer