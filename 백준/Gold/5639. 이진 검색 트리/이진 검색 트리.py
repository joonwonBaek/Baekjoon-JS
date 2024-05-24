import sys
sys.setrecursionlimit(10**5)

arr = []
while True:
    try:
        x = int(input())
        arr.append(x)
    except:
        break

def post(start, end):
    if start >= end - 1:
        print(arr[start])
        return

    if arr[start] > arr[end - 1] or arr[start] < arr[start + 1]:
        post(start + 1, end)
        print(arr[start])
        return

    mid = 0
    for i in range(start + 1, end):
        if arr[start] < arr[i]:
            mid = i
            break
    post(start + 1, mid)
    post(mid, end)
    print(arr[start])

post(0, len(arr))