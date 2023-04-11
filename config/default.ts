require('dotenv').config()
export default {
    port: 80,
    dbUri: process.env.DB_URI
}