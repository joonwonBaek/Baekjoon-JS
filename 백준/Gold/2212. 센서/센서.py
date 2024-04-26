n = int(input())
k = int(input())
sensor = list(map(int, input().split()))

sensor.sort()
temp = []

for i in range(1, n):
    temp.append(sensor[i] - sensor[i-1])

temp.sort(reverse=True)

print(sum(temp[k-1:]))