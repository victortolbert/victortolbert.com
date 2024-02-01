# PostgreSQL

:u-icon{name="i-logos-postgresql" class="h-11 w-auto float-right pl-8 mb-16"}

PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance.

PostgreSQL is a powerful, open source object-relational database system with over 35 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.

```sql
create table customers(
   id       INT              NOT NULL,
   name     VARCHAR (20)     NOT NULL,
   age      INT              NOT NULL,
   address  CHAR (25),
   salary   DECIMAL (18, 2),
   PRIMARY KEY (ID)
);
```
