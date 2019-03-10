docker kill level-1
docker rm level-1
docker rmi full-stack-development/level-1 
docker image build  -t full-stack-development/level-1 .
docker container run -d -p 8089:80 --name level-1 full-stack-development/level-1 
docker ps 