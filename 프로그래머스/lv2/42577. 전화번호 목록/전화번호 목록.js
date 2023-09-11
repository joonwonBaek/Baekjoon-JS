function solution(phone_book) {
    phone_book.sort(); // 전화번호 목록을 사전순으로 정렬
    for (let i = 0; i < phone_book.length - 1; i++) {
        if (phone_book[i + 1].startsWith(phone_book[i])) {
            return false; // 접두사가 있으면 false 반환
        }
    }
    return true; // 아무런 접두사도 없으면 true 반환
}