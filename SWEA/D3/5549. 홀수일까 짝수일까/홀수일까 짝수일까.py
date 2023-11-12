tc = int(input())
for t in range(1, tc+1):
    n = int(input())
    if n%2 == 1:
        print(f"#{t} Odd")
    else:
        print(f"#{t} Even")