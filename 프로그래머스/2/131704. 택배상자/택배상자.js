function solution(order) {
    const truck = []
    let answer = 0
    let idx = 0
    for(let i = 1; i<=order.length; i++) {
        if(order[idx] != i){
            truck.push(i)
        } else {
            idx += 1
            answer += 1
        }
        
        while(truck.length !== 0 && truck.at(-1) === order[idx]) {
            truck.pop()
            idx += 1
            answer += 1
        }
    }
    return answer
}