function solution(numbers) {
    const answer = []
    for(const num of numbers) {
        let a = '0' + num.toString(2)
        if(a[a.length-1] === '0') {
            a = a.substring(0, a.length-1) + '1'
        } else {
            const idx = a.lastIndexOf('01')
            a = a.substring(0, idx) + '10' + a.substring(idx+2, a.length)
        }
        answer.push(parseInt(a, 2))
    }
    return answer;
}