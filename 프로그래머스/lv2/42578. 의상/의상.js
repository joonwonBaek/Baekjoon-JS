function solution(clothes) {
    let answer = 1;
    const cloth = {};
    
    clothes.forEach(([name, type]) => {
        if(cloth[type] === undefined) {
            cloth[type] = 1;
        }
        else {
            cloth[type] += 1;
        }
    });
    for([key,value] of Object.entries(cloth)){
        answer *= (value+1)
    }
    return answer-1;
}