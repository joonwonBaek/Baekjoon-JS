n, k = map(int, input().split())

start = 0
end = n
flag = False

while start <= end:
    row_cnt = (start+end) // 2

    col_cnt = n-row_cnt

    temp = (row_cnt+1) * (col_cnt+1)

    if temp == k:
        print('YES')
        flag = True
        break

    if temp >= k:
        start = row_cnt + 1
    else:
        end = row_cnt - 1
if not flag:
    print("NO")