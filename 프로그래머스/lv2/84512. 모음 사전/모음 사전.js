function solution(word) {
    const alpha = ['A', 'E', 'I', 'O', 'U'];
    let answer;
    let cnt = 0;
    function dfs(ans) {
        if(ans === word) {
            answer = cnt
        }
        if(ans.length >= 5) {
            return;
        }
        for(let i = 0; i < alpha.length; i++) {
            cnt += 1;
            dfs(ans + alpha[i]);
        }
    }
    dfs('');
    return answer;
}