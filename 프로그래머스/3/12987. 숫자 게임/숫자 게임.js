function solution(A, B) {
    let answer = 0;
    const visited = new Array(B.length).fill(0)
    A.sort((a,b) => a-b)
    B.sort((a,b) => a-b)
    let j = 0
    for(let i = 0; i < A.length; i++){
        while(true){
            if(j === B.length) break
            if(A[i] < B[j]) {
                answer += 1
                j += 1
                break
            } else j += 1
        }
    }
    return answer;
}