-- 코드를 입력하세요
SELECT substring(PRODUCT_CODE, 1, 2) as CATEGORY, COUNT(PRODUCT_ID)
from PRODUCT
group by substring(PRODUCT_CODE, 1, 2)