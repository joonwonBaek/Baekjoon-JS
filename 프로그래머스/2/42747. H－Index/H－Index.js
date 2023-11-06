function solution(citations) {
    let answer = 0;
    let arr = [];
    let clen = citations.length;
    citations.sort((a,b) => b-a);
    for(let i=0; i<clen; i++){
        arr.push(citations[i]);
        if(citations[i] < arr.length) {
            break;
        }
        answer += 1;
    }
    return answer;
}