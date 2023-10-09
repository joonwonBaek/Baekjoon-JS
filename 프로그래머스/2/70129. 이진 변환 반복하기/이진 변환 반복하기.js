function solution(s) {
    var answer = [];
    var cnt_zero = 0;
    var cnt = 0;
    while( s != '1'){
        slen = s.length;
        s = s.replaceAll('0', '');
        slen -= s.length;
        cnt_zero += slen;
        s = s.length.toString(2);
        cnt += 1;
    }
    answer.push(cnt,cnt_zero)
    return answer;
}