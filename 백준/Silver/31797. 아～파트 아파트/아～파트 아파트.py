n, m = map(int, input().split())
hands = []

for i in range(m):
    h1, h2 = map(int, input().split())
    hands.append((h1, i+1))
    hands.append((h2, i+1))

hands.sort()

print(hands[(n-1)%(2*m)][1])