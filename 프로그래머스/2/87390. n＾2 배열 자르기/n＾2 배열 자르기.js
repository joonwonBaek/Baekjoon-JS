function solution(n, left, right) {
    let answer = [];
    for(let i = left; i<right+1; i++){
        let row = Math.floor(i/n);
        let num = i%n;
        if(num <= row) {
            answer.push(row+1);
        }
        else{
            answer.push(num+1)
        }
    }
    return answer;
}