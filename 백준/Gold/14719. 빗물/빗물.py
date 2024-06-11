h, w = map(int, input().split())
arr = list(map(int, input().split()))
answer = 0

for i in range(1, w-1):
    left = max(arr[:i])
    right = max(arr[i+1:])

    temp = min(left, right)

    if temp > arr[i]:
        answer += temp - arr[i]
print(answer)