function solution(n, words) {
    var answer = [0,0];

    for(let i=0; i<words.length; i++){
        let p = i%n+1;
        let turn = Math.ceil((i+1)/n)
        if(i > 0){
            let last = words[i-1].split("").pop();
            
            if(i>words.indexOf(words[i]) || words[i][0]!=last){
                answer = [p,turn]
                break;
            }
        }
    }
    return answer;
}