function solution(genres, plays) {
    let answer = [];
    let music = new Map();
    for(let i=0; i<genres.length; i++){ // 장르별 play 횟수 더하기
        if(music.has(genres[i])) {
            music.set(genres[i], music.get(genres[i])+plays[i]);
        }
        else {
            music.set(genres[i], plays[i]);
        }
    }
    while(music.size > 0) {
        let songs = [];
        let max = [...music.entries()].reduce((a,b)=> a[1]>b[1] ? a:b)[0]; // max 장르 구하기
        genres.filter((genre, index) => {
            if(genre === max) { // max 장르와 일치하면 songs 배열로 push
                songs.push([plays[index], index]);
            }
        })
        songs.sort((a,b) => { // songs 배열을 1. 많이 재생 2. 재생 횟수 같으면 index 낮은 순서로 정렬
            if(a[0]===b[0]){
                return a[1] - b[1];
            } else {
                return b[0] - a[0];
            }
        }).splice(2); // 2개씩 자르기
        for(let num of songs){
            answer.push(num[1]);
        }
        music.delete(max);
    }
    return answer;
}