k = int(input())
result = ''
while k > 0:
    m = k % 2
    k = k // 2

    if m == 0:
        result = '7' + result
        k -= 1
    else:
        result = '4' + result

print(result)