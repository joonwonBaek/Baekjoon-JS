n = int(input())
arr = list(map(int, input().split()))
answer = 0

left = 0
right = n-1

while left + 1 < right:
    cnt = right - left - 1
    answer = max(answer, cnt * min(arr[right], arr[left]))

    if arr[left] <= arr[right]:
        left += 1
    else:
        right -= 1

print(answer)