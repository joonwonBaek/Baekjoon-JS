n = int(input())

arr = list(map(int, input().split()))
ans = 0
sum = [arr[0]]
# 누적합 구하기
for i in range(1, n):
    sum.append(sum[i-1]+arr[i])

# 1. 꿀통 가장 왼쪽
for i in range(1, n-1):
    ans = max(ans, sum[n-2]-arr[i]+sum[i-1])
# 2. 꿀통 가장 오른쪽
for i in range(1, n-1):
    ans = max(ans, sum[n-1]-arr[0]-arr[i]+sum[n-1]-sum[i])
# 3. 벌 사이에 꿀통
for i in range(1, n-1):
    ans = max(ans, sum[n-2]-sum[i-1]+sum[i]-arr[0])

print(ans)