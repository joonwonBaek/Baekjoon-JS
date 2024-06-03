n, k = map(int, input().split())
words = [input() for _ in range(n)]

learn = [0] * 26

for c in ('a', 'n', 't', 'i', 'c'):
    learn[ord(c)-ord('a')] = 1

if k < 5:
    print(0)
elif k == 26:
    print(n)
else:
    answer = 0
    def count(idx, cnt):
        global answer
        if cnt == k - 5:
            readcnt = 0
            for word in words:
                check = True
                for w in word:
                    if learn[ord(w)-ord('a')] == 0:
                        check = False
                        break
                if check:
                    readcnt += 1
            answer = max(answer, readcnt)
            return

        for i in range(idx, 26):
            if learn[i] == 0:
                learn[i] = 1
                count(i, cnt + 1)
                learn[i] = 0

    count(0, 0)
    print(answer)