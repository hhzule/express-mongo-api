TomDoesTech/ Build a REST API with Node.js, Express, TypeScript, MongoDB & Zod 

yarn add express zod config cors express mongoose pino pino-pretty dayjs bcrypt jsonwebtoken lodash nanoid

yarn add @types/body-parser @types/config @types/cors @types/express @types/node @types/pino @types/mongoose @types/bcrypt @types/jsonwebtoken @types/lodash @types/nanoid ts-node-dev typescript -D

yarn dev  //dev server

add scripts in package.json
yarn tsc --init
add outDir: "build"

mongodb
sudo systemctl start mongod
sudo systemctl daemon-reload // if fail to start
sudo systemctl status mongod
sudo systemctl stop mongod //stop
sudo systemctl restart mongod //restart

curl http://localhost:1337/<api-endpoint>

swagger
yarn add swagger-ui-express swagger-jsdoc
yarn add @types/swagger-ui-express @types/swagger-jsdoc
add swagger.ts in utils

Docker deployment
Dockerfile and docker-compose.yml
docker-compose build
docker compose up 
docker compose up --build //to restart

if daemon doesnt connect
docker system prune
systemctl restart docker.service
docker-compose logs