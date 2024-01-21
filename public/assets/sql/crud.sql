-- create people table
create table people (name varchar);

-- insert (create)
insert into
  people
values
  (name 'jake');

-- select (read)
select
  *
from
  people
where
  name = 'jake';

-- update (update)
update
  people
set
  name = 'jane'
where
  name = 'jake';

-- delete (delete)
delete from
  people
where
  name = 'jane';
