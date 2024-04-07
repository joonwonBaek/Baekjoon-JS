n = int(input())

answer = {}

for _ in range(n):
    a, b = input().split(".")
    if answer.get(b) == None:
        answer[b] = 1
    else:
        answer[b] += 1

sorted_answer = sorted(answer.items(), key=lambda item:item[0])

for key, value in sorted_answer:
    print(key, value)