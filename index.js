const express = require("express");
const cors = require("cors");
// import {connectDB} from './config/databases.js'
// import router from './config/routes.js'
const router = require("./config/routes");


const app = express()
const port = 3002
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send('welcome to the app')
})

app.use(router)

app.listen(port,()=>{
    console.log('listening on port ',port)
})

