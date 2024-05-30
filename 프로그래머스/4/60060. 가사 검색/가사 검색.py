from bisect import bisect_right, bisect_left

def count(arr, l, r):
    left = bisect_left(arr, l)
    right = bisect_right(arr, r)
    
    return right - left
    

def solution(words, queries):
    answer = []
    data = [[] for _ in range(10001)]
    reverse = [[] for _ in range(10001)]
    for word in words:
        data[len(word)].append(word)
        reverse[len(word)].append(word[::-1])
    
    for i in range(10001):
        data[i].sort()
        reverse[i].sort()
    
    for q in queries:
        if q[0] != '?':
            temp = count(data[len(q)], q.replace('?', 'a'), q.replace('?', 'z'))
        else:
            temp = count(reverse[len(q)], q[::-1].replace('?', 'a'), q[::-1].replace('?', 'z'))
        
        answer.append(temp)
    return answer