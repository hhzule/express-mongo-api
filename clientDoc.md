### Create an EC2 instance with create a key-pair and save the "example.pem" file.

### Locally connect to the EC2 instance using SSH client with the provided link under the Connct tab on the AWS console.

make sure to have the "example.pem" file (created as a key-pair) on the root of your folder or specify the path to .pem file.

#### run the following command once logged in the remote instance to install git and nodejs:

`yum update -y`  
`yum install -y gcc make git`  
`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash`  
`. ~/.nvm/nvm.sh`  
`nvm install 16`

#### test nodeJS is installed with the following command:

`node -e "console.log('Running Node.js ' + process.version)`  
out put ==> Running Node.js VERSION

#### now install yarn and pm2:

`yum install -y nodejs`
`npm install -g pm2`

#### now clone the repository:

`git clone https://github.com/hhzule/express-mongo-api.git` , // Replace with your actual git repository URL
`cd express-mongo-api`  
`yarn install`  
`yarn build`  
`cd build`  
`yarn install`  
`node src/app.js`  
`pm2 start src/app.js`  
`sudo yum install iptables`  
`sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports <your-express-port>`
