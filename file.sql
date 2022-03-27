-- search INSENSITIVE in SQL

-- column: id, name, address from table user
SELECT * FROM user WHERE LOWER(name) = LOWER("SearchNameExample");