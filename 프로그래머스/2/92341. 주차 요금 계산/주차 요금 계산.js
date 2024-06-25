function solution(fees, records) {
    const parking = {}
    const total = {}
    let answer = []
    for(const record of records) {
        const [time, number, type] = record.split(" ")
        if(type === 'IN') {
            parking[number] = time
        } else {
            const [hour1, minute1] = time.split(":").map(Number)
            const [hour2, minute2] = parking[number].split(":").map(Number)
            delete parking[ number]
            let temp = (hour1-hour2) * 60 + (minute1-minute2)
            if(number in total) {
                total[number] += temp
            } else{
                total[number] = temp
            }       
        }
    }
    for(const key in parking) {
        const [hour, minute] = parking[key].split(":").map(Number)
        let temp = (23 - hour)*60 + 59-minute
        if(key in total) {
            total[key] += temp
        } else{
            total[key] = temp
        }
    }
    const sortedKeys = Object.keys(total).sort();
    const result = [];
    for (const key of sortedKeys) {
        result.push(total[key]);
    }
    for(const r of result) {
        if(r > fees[0]) {
            answer.push(fees[1] + Math.ceil((r-fees[0]) / fees[2]) * fees[3])
        } else {
            answer.push(fees[1])
        }
    }
    return answer;
}