number = input()
n = len(number)
answer = set()


def dfs(result, left, right, distance):
    if result == number:
        answer.add(distance)

    else:
        if left > 0:
            dfs(number[left-1] + result, left - 1, right, distance + result)

        if right < n - 1:
            dfs(result + number[right+1], left, right + 1, distance + result)


for i in range(n):
    dfs(number[i], i, i, number[i])

print(len(answer))
