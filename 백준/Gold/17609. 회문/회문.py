t = int(input())

for _ in range(t):
    answer = 2
    arr = input()
    start = 0
    end = len(arr)-1
    if arr == arr[::-1]:
        answer = 0
    else:
        while True:
            if arr[start] == arr[end]:
                start += 1
                end -= 1
            else:
                if end - start == 1:
                    temp = arr[:start] + arr[end:]
                    if temp == temp[::-1]:
                        answer = 1
                        break
                if start < end - 1:
                    temp = arr[:end] + arr[end+1:]
                    if temp == temp[::-1]:
                        answer = 1
                        break
                if start + 1 < end:
                    temp = arr[:start] + arr[start+1:]
                    if temp == temp[::-1]:
                        answer = 1
                        break
                break
    print(answer)