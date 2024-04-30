n = int(input())

arr = []
mid = 0

for i in range(1, n+1):
    a, b = map(int, input().split())
    arr.append([a, b])
    mid += b

arr.sort(key=lambda x: x[0])
mid /= 2
for a in arr:
    mid -= a[1]
    if mid <= 0:
        print(a[0])
        break