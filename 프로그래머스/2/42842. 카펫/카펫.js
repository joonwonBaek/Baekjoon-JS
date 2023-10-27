function solution(brown, yellow) {
    var answer = [];
    var num = brown + yellow;
    for(let i = 3; i<=Math.sqrt(num); i++){
        if(num%i === 0){
            if((i-2)*((num/i)-2) === yellow){
                answer.push(num/i,i)
            }
        }
    }
    return answer;
}