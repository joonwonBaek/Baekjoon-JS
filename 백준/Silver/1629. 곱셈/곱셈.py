a, b, c = map(int, input().split())

def recursive(a, b, c):
    if b == 1:
        return a % c
    temp = recursive(a, b // 2, c)

    if b % 2 == 1:
        return ((temp * temp) % c) * a % c
    else:
        return (temp * temp) % c

print(recursive(a, b, c))