n = int(input())

calendar = [0] * 366

idx = 0
for _ in range(n):
    s, e = map(int, input().split())

    for i in range(s, e+1):
        idx = max(idx, i)
        calendar[i] += 1

width = 0
height = 0
answer = 0
for i in range(1, idx+1):
    if calendar[i] == 0:
        answer += width*height
        width = 0
        height = 0
    else:
        width += 1
        height = max(height, calendar[i])
if width != 0 or height != 0:
    answer += width*height
print(answer)