function solution(s){
    var answer = true;
    var stack = [];
    
    for(var a of s){
        if(a == '('){
            stack.push(a);
        }
        else {
            if(stack.length === 0){
                return false;
            }
            else {
                stack.pop()
            }
        }
    }
    return stack.length === 0;
}