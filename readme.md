# An Admin can  add, update, delete and view the dealers.

- > **POST** *request* [/adddealer](https://localhost:1111/adddealer).

    > post body

```json
{
  "id": "123",
  "name":"Alton",
  "city" : "US",
  "Agency": "abc"
  }
```
- > **UPDATE** *request* [/updatedealer](https://localhost:1111/updatedealer).

    > post body

```json
{
  "id": "123",
  "name":"Alton",
  "city" : "US",
  "Agency": "abc"
  }
```
- > **DELETE** *request* [/deletedealer](https://localhost:1111/deletedealer).

    > post body

```json
{
  "id": "123"
  }
```
- > **GET** *request* [/getdealers](https://localhost:1111/dealers).

    > post body

```json
{
  "id": "123"
  }
```



# An Admin can see all watch details which are following:
# All watches in the system
# An Admin can add, update, delete and view all the customers.
# An Admin can also perform all operations that a dealer can do (Point to be discussed with Client).
# Admin will authorize the watch entry or update.
# An Admin can see all the watches listed for purchase/sold/request for approval by the dealer
# An Admin can adjust the commission percentage/fee for dealer and client.


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