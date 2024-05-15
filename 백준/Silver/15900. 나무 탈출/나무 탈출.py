import sys
sys.setrecursionlimit(600000)

n = int(input())

tree = [[] for _ in range(n+1)]

for _ in range(n-1):
    a, b = map(int, input().split())
    tree[a].append(b)
    tree[b].append(a)

visited = [0] * (n+1)

leaf = []
for i in range(2, len(tree)):
    if len(tree[i]) == 1:
        leaf.append(i)

def dfs(idx):
    for i in tree[idx]:
        if visited[i] == 0:
            visited[i] = visited[idx] + 1
            dfs(i)
dfs(1)
sum = 0
for l in leaf:
    sum += visited[l]

if sum % 2 == 0:
    print("No")
else:
    print("Yes")