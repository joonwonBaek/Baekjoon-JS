import heapq

n = int(input())
answer = 0
dict = {}
for i in range(n):
    q = list(input().split())

    arr = []
    a = q[0]
    b = q[1]
    c = int(q[2])

    if a == '1':
        if b in dict:
            for k in range(3, len(q)):
                heapq.heappush(dict[b], -int(q[k]))
        else:
            for k in range(3,len(q)):
                heapq.heappush(arr, -int(q[k]))
            dict[b] = arr
    else:
        if b in dict:
            for k in range(c):
                if dict[b]:
                    temp = heapq.heappop(dict[b])
                    answer += abs(temp)
                else:
                    break
print(answer)