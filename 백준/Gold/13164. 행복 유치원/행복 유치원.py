n, k = map(int, input().split())

arr = list(map(int, input().split()))
temp = []

for i in range(1, n):
    temp.append(arr[i]-arr[i-1])

temp.sort(reverse=True)
print(sum(temp[k-1:]))