from itertools import combinations

arr = list(input())
stack = []
temp = []
answer = set()

for i in range(len(arr)):
    if arr[i] == "(":
        stack.append(i)
    elif arr[i] == ")":
        temp.append((stack.pop(), i))

for i in range(1, len(temp) + 1):
    comb = combinations(temp, i)
    for c in comb:
        target = list(arr)
        for k in c:
            target[k[0]] = ""
            target[k[1]] = ""

        answer.add("".join(target))

for s in sorted(list(answer)):
    print(s)