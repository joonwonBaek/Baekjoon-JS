n = int(input())

a = list(map(int, input().split()))

b,c = map(int, input().split())

answer = 0
for x in a:
    temp = x-b
    if temp > 0:
        if temp/c == int(temp/c):
            answer += temp//c + 1
        else:
            answer += temp//c + 2
    else:
        answer += 1
print(answer)

