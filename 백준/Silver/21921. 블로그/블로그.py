n, x = map(int, input().split())
arr = list(map(int, input().split()))

value = sum(arr[:x])
max_value = value
cnt = 1
if max(arr) == 0:
    print('SAD')
else :
    for i in range(x, n):
        value += arr[i]
        value -= arr[i-x]

        if value > max_value:
            max_value = value
            cnt = 1
        elif value == max_value:
            cnt += 1
    print(max_value)
    print(cnt)