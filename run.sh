docker run --name=ise -v $(pwd)/server/:/server -p 8080:8080 -e MYSQL_ROOT_PASSWORD=123456 -d hcmus-ise
