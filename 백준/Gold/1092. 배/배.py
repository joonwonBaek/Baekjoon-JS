n = int(input())
crane = list(map(int, input().split()))
m = int(input())
box = list(map(int, input().split()))

crane.sort(reverse=True)
box.sort(reverse=True)
cnt = 0
if crane[0] < box[0]:
    cnt = -1
else:
    while box:
        for c in crane:
            for b in box:
                if c >= b:
                    box.remove(b)
                    break
                else:
                    continue
        cnt += 1

print(cnt)