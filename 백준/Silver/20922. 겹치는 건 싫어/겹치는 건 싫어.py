# 투 포인터
n, k = map(int, input().split())

arr = list(map(int, input().split()))

start = 0
end = 0
num = dict()
answer = 0

while end < n:
    if arr[end] not in num:
        num[arr[end]] = 0

    if num[arr[end]] < k:
        num[arr[end]] += 1
        end += 1

    else:
        num[arr[start]] -= 1
        start += 1

    answer = max(answer, end-start)

print(answer)
