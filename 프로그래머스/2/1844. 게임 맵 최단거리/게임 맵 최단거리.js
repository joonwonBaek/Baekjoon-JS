

function solution(maps) {
    const ylen = maps.length
    const xlen = maps[0].length
    const goalx = xlen-1
    const goaly = ylen -1
    const dx = [0,0,1,-1]
    const dy = [-1,1,0,0]
    const queue = []
    queue.push([0,0,1])
    while(queue.length) {
        const [cury, curx, move] = queue.shift()
        if(curx === goalx && cury === goaly) {
            return move
        }
        for(let i = 0; i<4; i++) {
            const nx = curx+dx[i]
            const ny = cury+dy[i]
            if(nx >= 0 && ny >= 0 && nx < xlen && ny < ylen && maps[ny][nx] === 1){
                queue.push([ny,nx, move+1])
                maps[ny][nx] = 0
            }
        }
    }
    return -1;
}