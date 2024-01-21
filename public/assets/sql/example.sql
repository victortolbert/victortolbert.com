select *
from example
where 1 = 1
and datepart(year, created_on) = 2023
and datepart(month, created_on) = 1
and datepart(day, created_on) = 1
and name like '%test%'
and company not in ('test1', 'test2')
and message not like 'No claim found from transaction_id%'
order by created_on desc
