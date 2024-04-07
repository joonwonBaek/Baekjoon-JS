n, m, r = map(int, input().split())

num = []
for i in range(n):
    data = list(map(int, input().split()))
    num.append(data)

calculation = list(map(int, input().split()))

def cal1(a):
    a = a[::-1]
    return a

def cal2(a):
    for j in range(n):
        a[j] = a[j][::-1]
    return a
def cal3(a):
    a = list(zip(*a))
    a = [list(s)[::-1] for s in a]
    return a
def cal4(a):
    a = list(zip(*a))[::-1]
    a = [list(s) for s in a]
    return a
def cal5():
    result = [[0] * m for _ in range(n)]
    # 1 -> 2
    for x in range(n//2):
        for y in range(m//2):
            result[x][m//2+y] = num[x][y]
    # 2 -> 3
    for x in range(n//2):
        for y in range(m//2, m):
            result[n//2+x][y] = num[x][y]
    # 3 -> 4
    for x in range(n//2, n):
        for y in range(m//2, m):
            result[x][y-m//2] = num[x][y]
    # 4 -> 1
    for x in range(n//2,n):
        for y in range(m//2):
            result[x-n//2][y] = num[x][y]
    return result
def cal6():
    result = [[0]*m for _ in range(n)]
    # 1 -> 4
    for x in range(n//2):
        for y in range(m//2):
            result[n//2+x][y] = num[x][y]
    # 2 -> 1
    for x in range(n//2):
        for y in range(m//2, m):
            result[x][y-m//2] = num[x][y]
    # 3 -> 2
    for x in range(n//2, n):
        for y in range(m//2, m):
            result[x-n//2][y] = num[x][y]
    # 4 -> 3
    for x in range(n//2, n):
        for y in range(m//2):
            result[x][m//2+y] = num[x][y]
    return result

for cal in calculation:
    if cal == 1:
        num = cal1(num)
    elif cal == 2:
        num = cal2(num)
    elif cal == 3:
        num = cal3(num)
        n,m = m,n
    elif cal == 4:
        num = cal4(num)
        n,m = m,n
    elif cal == 5:
        num = cal5()
    elif cal == 6:
        num = cal6()

for a in num:
    print(*a)




