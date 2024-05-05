n = int(input())


def dfs(energram_dict, answer):
    if len(answer) == len(a):
        print("".join(answer))
        return

    for energram in energram_dict:
        if energram_dict[energram]:
            energram_dict[energram] -= 1
            answer.append(energram)
            dfs(energram_dict, answer)
            answer.pop()
            energram_dict[energram] += 1
    return


for _ in range(n):
    a = list(input())
    a.sort()
    visited = [0]*len(a)
    energram_dict = dict()

    for i in a:
        if i in energram_dict.keys():
            energram_dict[i] += 1
        else:
            energram_dict[i] = 1


    dfs(energram_dict, [])
