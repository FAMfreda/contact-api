import express from "express";
import { dbConnection } from "./config/db.js";
import ContactRouter from "./routes/contact.js";


// creating a server
const app = express();


//middleware
app.use(express.json())


//database connection
dbConnection()

// use the router
app.use(ContactRouter)





const port = process.env.PORT || 8080

//listen to the server
app.listen(port, ()=> {
    console.log(`app is listening on port ${port}`)

})