function solution(s) {
    var answer = '';
    var arr = s.split(" ").map(x => Number(x));
    answer += String(Math.min(...arr))+ ' '+String(Math.max(...arr))
    return answer;
}