function solution(k, tangerine) {
    var answer = 0;
    var sum = 0;
    var a = {};
    tangerine.forEach((i) => {
        a[i] = ++a[i] || 1;
    });
    const values = Object.values(a).sort((a,b)=>b-a);
    for(let i=0; i<values.length; i++){
        sum += values[i];
        if(sum >= k){
            return i?i+1:1;
        }
    }
}