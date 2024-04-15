arr = input().split('-')

num = []
for i in arr:
    sum = 0
    temp = i.split('+')
    for j in temp:
        sum += int(j)
    num.append(sum)

answer = num[0]

for n in range(1, len(num)):
    answer -= num[n]

print(answer)