function solution(progresses, speeds) {
    var answer = [];
    var arr = [];
    var stack = [];
    for(let i = 0; i<progresses.length; i++){
        arr.push(Math.ceil((100-progresses[i])/speeds[i]));
    }
    for(let i = 0; i<arr.length; i++){
        if(stack.length === 0){
            stack.push(arr[i]);
        }
        else{
            if(arr[i]<=stack[0]){
                stack.push(arr[i])
            }
            else{
                answer.push(stack.length);
                stack.splice(0);
                stack.push(arr[i]);
            }
        }
    }
    answer.push(stack.length);
    return answer;
}