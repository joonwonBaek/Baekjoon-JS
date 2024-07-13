function solution(record) {
    const result = [];
    const dict = {};
    for(const r of record) {
        const [action, id, name] = r.split(" ")
        if(action === "Enter") {
            result.push(id+"님이 들어왔습니다.")
        } else if(action === "Leave") {
            result.push(id+"님이 나갔습니다.")
            continue
        }
        dict[id] = name
    }
    for(let i = 0; i < result.length; i++){
        const [id, a] = result[i].split("님이")
        result[i] = result[i].replace(id, dict[id])
    }
    return result;
}