//E-movie library
//Register(model is required)
//Login
//Createprofile
//reset password
//update password
//get profile
//get a movie(model is required)
//save a movie in their account(AuthToken required)
//update movie (AuthToken Required)
//delete a movie (AuthToken Required)


const appRouter = require('./src/router/index')
const express = require('express')
const dotenv = require("dotenv")
dotenv.config({path:".env"})
const connectDB = require("./src/config/db")
const app = express()


connectDB();
app.use(express.json())

const port =5000

app.use("/", appRouter);

app.listen( port,()=>{
    console.log(`app run on ${port}`)
})



