function solution(n) {
    const num = ['1', '2', '4']
    let answer = '';
    while(n > 0) {
        n -= 1
        answer = num[n%3] + answer;
        n = parseInt(n/3)
    }
    return answer;
}