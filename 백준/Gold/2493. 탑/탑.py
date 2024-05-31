n = int(input())

arr = list(map(int, input().split()))
stack = [(arr[-1], n-1)]
answer = [0]*n
i = n-2

while i >= 0:
    while stack and stack[-1][0] < arr[i]:
        a, b = stack.pop()
        answer[b] = i + 1
    stack.append((arr[i], i))
    i -= 1

print(*answer)