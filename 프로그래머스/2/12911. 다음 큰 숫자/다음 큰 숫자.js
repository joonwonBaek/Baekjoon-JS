function solution(n) {
    var answer = n+1;
    var cnt = n.toString(2).split(0).join("").length;
    while(true){
        if(cnt === answer.toString(2).split(0).join("").length){
            break;
        }
        answer += 1;
    }
    return answer;
}