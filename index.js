require('dotenv').config()
const express = require ('express')
const cors = require('cors')
const db=require("./DB/connection")
const router = require('./Routes/router')
const lvServer = express()
lvServer.use(cors())
lvServer.use(express.json())
lvServer.use(router)

const PORT = 2000 || process.env.PORT
lvServer.listen(PORT,()=>{
    console.log('lvServer listening on port '+PORT);
})
lvServer.get('/',(req,res)=>{
    res.send("Welcome User")
})