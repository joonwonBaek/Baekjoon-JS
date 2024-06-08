n = int(input())
arr = list(map(int, input().split()))

left = 0
right = n-1
ans = abs(arr[left] + arr[right])
result = []

while left < right:
    temp = arr[left] + arr[right]
    if abs(temp) <= ans:
        ans = abs(temp)
        result = [arr[left], arr[right]]

        if ans == 0:
            break

    if temp < 0:
        left += 1
    else:
        right -= 1
print(*result)