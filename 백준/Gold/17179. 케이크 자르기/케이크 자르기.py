n, m, l = map(int, input().split())
s = [int(input()) for _ in range(m)] +[l]
q = [int(input()) for _ in range(n)]

for k in q:
    start = 0
    end = l
    answer = 0
    while start <= end:
        mid = (start + end) // 2
        cnt, temp = 0, 0
        for i in s:
            if i - temp >= mid:
                cnt += 1
                temp = i

        if cnt > k:
            start = mid + 1
            answer = mid
        else:
            end = mid - 1
    print(answer)