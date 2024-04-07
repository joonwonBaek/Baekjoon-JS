n, k = map(int, input().split())

s = list(map(int, input().split()))
d = list(map(int, input().split()))

for _ in range(k):
    ans = [0]*n
    for i in range(n):
        ans[d[i]-1] = s[i]
    s = ans

print(*s)