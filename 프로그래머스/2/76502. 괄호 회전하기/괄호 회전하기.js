function solution(s) {
    let answer = 0;
    const stack = [];
    let ischeck = true;
    if (s.length % 2 === 1) return 0;
    
    for(let i=0; i<s.length; i++){
        let arr = s.slice(i)+s.slice(0,i);
        ischeck = true;
        for(let a of arr){
            if(a === '(' || a === '{' || a === '['){
                stack.push(a);
            }
            else{
                let left = stack.pop();
                if(a === ')' && left === '(') continue;
                if(a === '}' && left === '{') continue;
                if(a === ']' && left === '[') continue;
                ischeck = false;
                break;
            }
        }
        if(ischeck) answer ++;
    }
    return answer;
}