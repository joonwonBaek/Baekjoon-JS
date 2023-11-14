tc = int(input())

for t in range(1, tc+1):
    n,d = map(int, input().split())
    cnt = 0
    while n > 0:
        n -= 2*d+1
        cnt += 1
    print(f"#{t} {cnt}")
