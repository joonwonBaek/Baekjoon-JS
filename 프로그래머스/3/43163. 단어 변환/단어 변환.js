function solution(begin, target, words) {
    if(words.includes(target)) {
        let answer = 0;
        const bfs = (begin, target, words) => {
            const queue = [[begin, 0]]
            
            while(queue.length > 0) {
                const [now, step] = queue.shift();
                
                if(now === target) {
                    return step
                }
                
                for(const word of words){
                    let cnt = 0
                    for(let i = 0; i<now.length; i++) {
                        if(now[i] != word[i]){
                            cnt += 1
                        }
                    }
                    if(cnt === 1) {
                        queue.push([word, step+1])
                    }
                }
            }
        }
        return bfs(begin, target, words);
    } else {
        return 0
    }
}