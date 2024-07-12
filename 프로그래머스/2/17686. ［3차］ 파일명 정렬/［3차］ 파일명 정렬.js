function solution(files) {
    const arr = []
    const answer = []
    for(const file of files) {
        const [temp, tail] = file.split(".")
        let head = ''
        let num = ''
        for(const t of temp){
            if(!isNaN(parseInt(t)) && num.length < 6){
                num += t
            } else {
                if(num) break
                head += t
            }
        }
        arr.push([head.toLowerCase(), Number(num), file])
    }
    arr.sort((a,b) => {
        if(a[0] !== b[0]) return a[0] > b[0] ? 1: -1
        else {
            if(a[1] !== b[1]) return a[1] > b[1] ? 1: -1
            else return files.indexOf(a[2]) > files.indexOf(b[2]) ? 1: -1
        }
    })
    for(const a of arr) {
        answer.push(a[2])
    }
    return answer;
}