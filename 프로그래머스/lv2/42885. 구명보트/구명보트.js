function solution(people, limit) {
    let answer = 0;
    people.sort((a,b) => a-b);
    let a = 0;
    let b = people.length-1;
    while(b>a){
        if(people[a]+people[b] <= limit){
            answer +=1;
            a += 1;
        }
        b-=1;
    }
    return people.length - answer;
}