function solution(numbers, target) {
    let answer = 0;
    function dfs(sum, count) {
        if(count === numbers.length){
            if(sum === target) {
                answer ++;
            }
            return
        }
        dfs(sum+numbers[count], count+1);
        dfs(sum-numbers[count], count+1);
    }
    dfs(0, 0);
    return answer;
}