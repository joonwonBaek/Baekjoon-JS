def solution(tickets):
    visited = [0] * len(tickets)
    tickets.sort(key=lambda x: x[1])
    answer = []
    def dfs(depth, word, arr, answer):
        if depth == len(tickets):
            answer.append(arr)
            return
        
        for i in range(len(tickets)):
            if visited[i] == 0:
                if tickets[i][0] == word:
                    visited[i] = 1
                    dfs(depth+1, tickets[i][1], arr+ " " + tickets[i][1], answer)
                    visited[i] = 0
    
    dfs(0, "ICN", "ICN", answer)
    answer.sort()
    return answer[0].split(" ")