l, c = map(int, input().split())
arr = list(input().split())
answer = []
arr.sort()
a = ['a', 'e', 'o', 'u', 'i']

def find(word):
    a_count, b_count = 0, 0
    for w in word:
        if w in a:
            a_count += 1
        else:
            b_count += 1
    if a_count >= 1 and b_count >= 2:
        return True
    else:
        return False

def dfs(idx):
    if len(answer) == l:
        if find(answer):
            print("".join(answer))
        return

    for i in range(idx, c):
        answer.append(arr[i])
        dfs(i+1)
        answer.pop()

dfs(0)
