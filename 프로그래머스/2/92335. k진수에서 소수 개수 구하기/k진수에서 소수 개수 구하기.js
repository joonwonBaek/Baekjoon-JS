function solution(n, k) {
    let answer = 0;
    let temp = n.toString(k)
    const isPrime = (number) => {
        if(Number(number) <= 1){
            return false
        }
        for (let i = 2; i <= (Number(number)**0.5); i++){
            if (Number(number) % i === 0){
                return false
            }
        }
        return true
    }
    let numArr = temp.split("0")
    for(const num of numArr) {
        if(isPrime(num)) {
            answer += 1
        }
    }
    return answer;
}