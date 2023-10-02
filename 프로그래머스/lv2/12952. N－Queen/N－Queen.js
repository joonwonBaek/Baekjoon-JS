function solution(n) {
    let queen = Array.from({length: n}, () => 0);
    let answer = 0;
    
    for(let i = 0; i < n; i++) {
        queen[0] = i;
        dfs(1)
    }
    function dfs(row) {
        if(n === row) {
            answer += 1;
        }
        for(let col = 0; col < n; col++){
            queen[row] = col;
            let checker = true;
            for(let i = 0; i < row; i++) {
                if(queen[row] === queen[i]) { //열
                    checker = false;
                    break;
                } 
                if(Math.abs(queen[row] - queen[i]) === Math.abs(i-row)) { //대각선
                    checker = false;
                    break;
                }
            }
            if(checker) dfs(row+1);
        } 
    }
    return answer;
}