function solution(n)
{
    var ans = 0;
    while(n > 0){
        if(n%2 === 0){
            n /= 2;
        }
        else if(n%2 === 1) {
            n -= 1;
            ans += 1;
        }
    }
    return ans;
}