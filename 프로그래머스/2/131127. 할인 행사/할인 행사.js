function solution(want, number, discount) {
    let answer = 0;
    var food_list = [];
    const isMatch = (discount) => {
        const wantmap = new Map();
        discount.forEach((d) => wantmap.set(d, (wantmap.get(d)||0)+1));
        for(let i=0; i<want.length; i++){
            if(wantmap.get(want[i]) !== number[i]){
                return false;
            }
        }
        return true;
    };
    for(let i=0; i<=discount.length-10; i++){
        const arr = discount.slice(i,i+10);
        if(isMatch(arr)) answer++;
    }
    return answer;
}