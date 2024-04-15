n = int(input())
room = []
for _ in range(n):
    start, end = map(int, input().split())
    room.append([start, end])

room.sort(key=lambda x: (x[1], x[0]))

end = 0
cnt = 0
for s, e in room:
    if s >= end:
        end = e
        cnt += 1

print(cnt)