function solution(msg) {
    const alpha_dict = {};
    for(let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
        const letter = String.fromCharCode(i);
        alpha_dict[letter] = i-64
    }
    
    let i = 0
    let check = ''
    const result = []
    let num = 27
    
    while(i < msg.length) {
        check += msg[i]
        if(check in alpha_dict) {
            i += 1
        } else {
            alpha_dict[check] = num
            num += 1
            let temp = check.slice(0, check.length-1)
            result.push(alpha_dict[temp])
            check = ""
        }
    }
    result.push(alpha_dict[check])
    return result;
}