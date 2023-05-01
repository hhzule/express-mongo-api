import mongoose from 'mongoose'
import config from 'config'
require('dotenv').config()

async function connect() {

    // const configdbUri = config.get<string>("dbUri")
    const dbUri = process.env.DB_URI || ""

    try {
        await mongoose.connect(process.env.DB_URI)
        console.log("db connected")
    } catch (error) {
        console.error(error);
        process.exit(1)
    }
}
export default connect;

