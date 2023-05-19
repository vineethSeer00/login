const express=require('express')

const cors=require('cors')

const CONNECTDB=require('./config/db')

CONNECTDB()

const app=express()

app.use(express.json())

app.use(cors())

const userAuth=require('../server/routes/userAuth')

app.use("/api/v1/userAuth",userAuth)

app.listen(3001,()=>{
    console.log("listning to port 3001");
})