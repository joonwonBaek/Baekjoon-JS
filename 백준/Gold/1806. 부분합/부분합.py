n, s = map(int, input().split())
arr = list(map(int, input().split()))

left, right = 0, 0
result = 0
min_length = n + 1

while True:
    if result >= s:
        min_length = min(min_length, right - left)
        result -= arr[left]
        left += 1
    elif right == n:
        break
    else:
        result += arr[right]
        right += 1

if min_length == n+1:
    print(0)
else:
    print(min_length)