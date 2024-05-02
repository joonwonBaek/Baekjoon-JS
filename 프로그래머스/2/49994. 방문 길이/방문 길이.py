def solution(dirs):
    x, y = 0, 0
    udrl = {'U': (1, 0), 'D': (-1, 0), 'R': (0, 1), 'L': (0, -1)}
    answer = 0
    sets = set()
    
    for d in dirs:
        dx, dy = udrl[d]
        nx = x + dx
        ny = y + dy
        
        if -5 <= nx <= 5 and -5 <= ny <= 5:
            sets.add(((x,y), (nx, ny)))
            sets.add(((nx, ny), (x, y)))
            x, y = nx, ny
        
    return len(sets)//2