tc = int(input())

for _ in range(tc):
    n = int(input())

    result = []
    def dfs(depth, total):
        if depth == n:
            result.append(total)
            return

        dfs(depth + 1, total + " " + str(depth+1))
        dfs(depth + 1, total + "+" + str(depth+1))
        dfs(depth + 1, total + "-" + str(depth+1))

    dfs(1, "1")

    for r in result:
        ans = r.replace(" ", "")
        if eval(ans) == 0:
            print(r)
    print()