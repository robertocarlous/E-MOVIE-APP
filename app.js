const appRouter = require('./src/router/index')
const express = require('express')
const dotenv = require("dotenv")
dotenv.config({path:".env"})
const connectDB = require("./src/config/db")
const app = express()


connectDB();
app.use(express.json())

const port = process.env.PORT

app.use("/", appRouter);

app.listen( port,()=>{
    console.log(`app run on ${port}`)
})



