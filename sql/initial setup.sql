-- DROP DATABASE IF EXISTS practice;

-- CREATE DATABASE practice
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United States.1252'
--     LC_CTYPE = 'English_United States.1252'
--     LOCALE_PROVIDER = 'libc'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

-- CREATE TABLE usernames (
-- 	id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
-- 	username VARCHAR ( 255 )
-- );

INSERT INTO usernames (username)
VALUES ('Mao'), ('nevz'), ('Lofty');
SELECT * FROM usernames;



