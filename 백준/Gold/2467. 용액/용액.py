n = int(input())
arr = list(map(int, input().split()))

left = 0
right = n - 1
answer = abs(arr[left] + arr[right])
ans_left = left
ans_right = right

while left < right:
    temp = arr[left] + arr[right]
    if abs(temp) < answer:
        ans_left = left
        ans_right = right
        answer = abs(temp)

        if answer == 0:
            break

    if temp < 0:
        left += 1
    else:
        right -= 1

print(arr[ans_left], arr[ans_right])