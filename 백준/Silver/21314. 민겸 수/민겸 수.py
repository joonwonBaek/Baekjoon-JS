arr = list(input())

max_num = ""
min_num = ""
# 큰 수 구하기
m = 0
for i in range(len(arr)):
    if arr[i] == "M":
        m += 1
    else:
        if m > 0:
            max_num += str(10 ** m * 5)
            min_num += str(10 ** (m) + 5)
        else:
            max_num += str(5)
            min_num += str(5)
        m = 0

if m != 0:
    max_num += '1'*m
    min_num += str(10 ** (m-1))

print(max_num)
print(min_num)