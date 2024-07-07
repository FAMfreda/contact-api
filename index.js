import express from "express";
import { dbConnection } from "./config/db.js";
import ContactRouter from "./routes/contact.js";
import expressOasGenerator from "express-oas-generator"
import mongoose from "mongoose";


// creating a server
const app = express();
expressOasGenerator.handleResponses(app, {
tags:['contact', 'users'],
mongooseModels:mongoose.modelNames(),
})


//middleware
app.use(express.json())


//database connection
dbConnection()

// use the router
app.use(ContactRouter)
expressOasGenerator.handleRequests();
app.use((req, res) => res.redirect('/api-docs/'))


const port = process.env.PORT || 8080

//listen to the server
app.listen(port, ()=> {
    console.log(`app is listening on port ${port}`)

})