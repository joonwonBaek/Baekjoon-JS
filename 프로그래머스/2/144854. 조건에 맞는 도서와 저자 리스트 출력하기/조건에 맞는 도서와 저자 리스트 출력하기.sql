-- 코드를 입력하세요
SELECT b.BOOK_ID, a.AUTHOR_NAME, DATE_FORMAT(PUBLISHED_DATE, '%Y-%m-%d') as PUBLISHED_DATE
from BOOK b join AUTHOR a
on b.AUTHOR_ID = a.AUTHOR_ID
where b.category = '경제'
order by PUBLISHED_DATE