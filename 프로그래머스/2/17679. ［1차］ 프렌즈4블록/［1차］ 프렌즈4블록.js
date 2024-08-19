function solution(m, n, board) {
    board = board.map((b) => b.split(""))
    while(true) {
        const find = []
        for(let i = 0; i < m-1; i++){
            for(let j = 0; j < n-1; j++) {
                const pick = board[i][j]
                if(pick && 
                   pick === board[i][j+1] && 
                   pick === board[i+1][j] && 
                   pick === board[i+1][j+1]) {
                    find.push([i,j])
                }
            }
        }
        if (!find.length) return board.flat().filter((v) => !v).length;
        
        for(const [x, y] of find) {
            board[x][y] = 0
            board[x+1][y] = 0
            board[x][y+1] = 0
            board[x+1][y+1] = 0
        }
        for(let i = m-1; i >= 0; i--){
            for(let j = 0; j < n; j++) {
               for(let k = i-1; k >=0; k--){
                   if(board[i][j]) break
                   if(board[k][j]) {
                       board[i][j] = board[k][j]
                       board[k][j] = 0
                       break
                   }
               } 
            }
        }
    }
    return board;
}