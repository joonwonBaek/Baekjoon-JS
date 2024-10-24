-- 코드를 입력하세요
SELECT hour(DATETIME) as 'HOUR', COUNT(*) as 'COUNT'
from ANIMAL_OUTS
where hour(DATETIME) BETWEEN 9 and 19
group by hour
order by hour