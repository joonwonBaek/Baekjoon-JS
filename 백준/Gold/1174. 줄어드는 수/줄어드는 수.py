arr = list()
result = set()
def dfs():
    if len(arr) > 0:
        result.add(int(''.join(map(str, arr))))

    for i in range(10):
        if len(arr) == 0 or arr[-1] > i:
            arr.append(i)
            dfs()
            arr.pop()

n = int(input())

dfs()
result = list(result)
result.sort()

if len(result) < n:
    print(-1)
else:
    print(result[n-1])

