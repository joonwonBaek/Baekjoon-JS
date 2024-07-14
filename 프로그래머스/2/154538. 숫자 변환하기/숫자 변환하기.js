function solution(x, y, n) {
    let answer = 0;
    const queue = [[y, 0]]
    while(queue.length) {
        const [num, idx] = queue.shift()
        if(num === x) return idx
        if(num%2 === 0 && num / 2 >= x) queue.push([num/2, idx + 1])
        if(num%3 === 0 && num / 3 >= x) queue.push([num/3, idx + 1])
        if(num-n >= x) queue.push([num-n, idx + 1]) 
    }
    return -1
}