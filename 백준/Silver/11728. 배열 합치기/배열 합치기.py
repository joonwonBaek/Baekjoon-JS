n, m = map(int, input().split())
a = list(map(int, input().split()))
b = list(map(int, input().split()))
i = 0
j = 0
arr = []
while len(arr) < n+m:
    if i == len(a):
        arr.append(b[j])
        j += 1
    elif j == len(b):
        arr.append(a[i])
        i += 1
    else:
        if a[i] < b[j]:
            arr.append(a[i])
            i += 1
        else:
            arr.append(b[j])
            j += 1

print(*arr)