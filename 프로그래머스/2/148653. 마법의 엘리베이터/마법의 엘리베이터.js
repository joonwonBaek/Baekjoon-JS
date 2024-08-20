function solution(storey) {
    let answer = 0;
    
    while(storey) {
        const n = storey % 10
        storey = parseInt(storey / 10)
        if(n > 5) {
            answer += 10 - n
            storey += 1
        } else if(n < 5) {
            answer += n;
        } else {
            const a = storey % 10
            if(a >= 5) {
                answer += 5
                storey += 1
            } else {
                answer += 5
            }
        }
    }
    return answer;
}