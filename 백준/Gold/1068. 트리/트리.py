from collections import deque

n = int(input())

arr = list(map(int, input().split()))
k = int(input())
count = 0

def dfs(num, arr):
    arr[num] = -2
    for a in range(len(arr)):
        if num == arr[a]:
            dfs(a, arr)

dfs(k, arr)
count = 0
for i in range(len(arr)):
    if arr[i] != -2 and i not in arr:
        count += 1

print(count)


