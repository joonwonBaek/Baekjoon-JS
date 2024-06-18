from collections import deque

n, k = map(int, input().split())
arr = list(map(int, input().split()))

dic = {}
queue = deque()
for a in arr:
    dic[a] = 0
    queue.append(a)

def check(x):
    if x in dic.keys():
        return False
    return True

def bfs():
    house = 0
    answer = 0

    while queue:
        sam = queue.popleft()
        left = sam - 1
        right = sam + 1

        if check(right):
            dic[right] = dic[sam] + 1
            house += 1
            answer += dic[right]
            if house == k:
                return answer
            queue.append(right)

        if check(left):
            dic[left] = dic[sam] + 1
            house += 1
            answer += dic[left]
            if house == k:
                return answer
            queue.append(left)

result = bfs()
print(result)



