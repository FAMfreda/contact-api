import mongoose from "mongoose";
import 'dotenv/config'

//declare database connection
const connectionString = process.env.mongo_url





//call the connection
export const dbConnection = () => {
    mongoose.connect(connectionString).then ( 
        () => {
            console.log('database connected')

        }
    )
}

