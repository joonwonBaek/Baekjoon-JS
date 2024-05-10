n = int(input())

num = "0123456789"
arr = []
for k in num:
    arr.append(k)

cnt = 1

while cnt <= 10:
    for a in arr:
        if len(a) == cnt:
            for i in range(10):
                if int(a[-1]) > i:
                    arr.append(a+str(i))
    cnt += 1

if n > 1022:
    print(-1)
else:
    print(arr[n])
