def solution(user_id, banned_id):
    u_n = len(user_id)
    b_n = len(banned_id)
    visited = [0] * u_n
    answer = set()
    def check(user, ban):
        if len(user) != len(ban):
            return False
        for i in range(len(user)):
            if ban[i] == '*':
                continue
            if user[i] != ban[i]:
                return False
        return True
    def dfs(idx):
        if idx == b_n:
            temp = []
            for i in range(len(visited)):
                if visited[i] == 1:
                    temp.append(user_id[i])
            answer.add(tuple(temp))
            return
        
        for i in range(u_n):
            if visited[i] == 0 and check(user_id[i], banned_id[idx]):
                visited[i] = 1
                dfs(idx + 1)
                visited[i] = 0
    dfs(0)  
    return len(answer)
