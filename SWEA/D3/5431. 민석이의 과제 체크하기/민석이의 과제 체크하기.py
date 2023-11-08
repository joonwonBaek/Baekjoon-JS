tc = int(input())
for t in range(1, tc+1):
    n,k = map(int, input().split())
    arr = list(map(int, input().split()))
    arr1 = []
    for i in range(1, n+1):
        if i not in arr:
            arr1.append(i)
    print(f"#{t}", end=" ")
    print(*arr1)
    