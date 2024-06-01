n = int(input())
circles = []
for i in range(n):
    x, r = map(int, input().split())
    circles.append((x-r, i))
    circles.append((x+r, i))

circles.sort()

stack = []
cnt = 0
for circle in circles:
    if stack:
        if stack[-1][1] == circle[1]:
            stack.pop()
            cnt += 1
        else:
            stack.append(circle)
    else:
        stack.append(circle)

if cnt == n:
    print("YES")
else:
    print("NO")
