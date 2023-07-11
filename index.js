import express, { json } from 'express'
import cors from 'cors'
import {connectDB} from './config/databases.js'
// import router from './config/databases'

const app = express()
const port = 3002
app.use(json())
app.use(cors())

app.get('/', (req,res) => {
    res.send('Welcome to the page')
})

// app.use('/',router)

connectDB().then(
    async () => {
      app.listen(port, () => {
        console.log('listening to the port,',port)
    })
    },
    () => {
      console.log('Cannot start app until database connection is initialized. This will become async later, but for the time, bad luck :(');
    }
  );

