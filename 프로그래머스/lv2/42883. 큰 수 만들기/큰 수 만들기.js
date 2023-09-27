function solution(number, k) {
    let answer = [];
    let cnt = 0;
    for(let i = 0; i<number.length; i++){
        while (cnt < k && answer[answer.length-1] < number[i]){
            answer.pop();
            cnt += 1;
        }
        if(answer.length < number.length - k){
            answer.push(number[i]);
        }
    }
    return answer.join("");
}