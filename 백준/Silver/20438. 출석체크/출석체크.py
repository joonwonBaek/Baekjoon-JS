import sys
input = sys.stdin.readline

n, k, q, m = map(int, input().split())
sleeps = list(map(int, input().split()))
codes = list(map(int, input().split()))

student = [0] * (n + 3)
check = [0] * (n + 3)

for sleep in sleeps:
    student[sleep] = 1

for code in codes:
    if student[code]:
        continue

    for c in range(code, n + 3, code):
        if not student[c]:
            check[c] = 1
temp = [check[0]]
for i in range(1, n + 3):
    temp.append(temp[-1] + check[i])

for _ in range(m):
    s, e = map(int, input().split())
    print(e-s+1-(temp[e]-temp[s-1]))
