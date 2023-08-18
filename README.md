docker run -d --name meu-mysql -e MYSQL_ROOT_PASSWORD=rinha_senha -e MYSQL_DATABASE=rinha_banco -p 3306:3306 mysql:latest
docker run --name meu-redis -p 6379:6379 -d redis
