words = input()

def dfs(word, start):
    if not word:
        return

    min_char = min(word)
    min_idx = word.index(min_char)

    answer[start+min_idx] = min_char

    print("".join(answer))

    dfs(word[min_idx + 1:], start + min_idx + 1)
    dfs(word[:min_idx], start)

answer = [""] * len(words)

dfs(words, 0)