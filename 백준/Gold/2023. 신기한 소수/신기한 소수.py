n = int(input())

result = []
# 에라토스테네스의 체로 소수 구하기
def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5)+1):
        if n % i == 0:
            return False
    return True

def dfs(depth, total):
    if depth == n:
        result.append(total)
        return
    for i in range(1, 10):
        if is_prime(int(total+str(i))):
            dfs(depth + 1, total+str(i))

dfs(0, "")

for r in result:
    print(r)