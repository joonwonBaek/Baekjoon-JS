def find(n):
    if n != parent[n]:
        parent[n] = find(parent[n])
    return parent[n]
def union(a, b):
    a = find(a)
    b = find(b)

    if a < b:
        parent[b] = a
    else:
        parent[a] = b


n, m = map(int, input().split())
graph = []
parent = [i for i in range(n+1)]

for _ in range(m):
    a, b, c = map(int, input().split())
    graph.append((a, b, c))

graph.sort(key=lambda x : x[2])
ans = 0
end_v = 0


for a, b, c in graph:
    if find(a) != find(b):
        union(a, b)
        ans += c
        end_v = c
print(ans - end_v)