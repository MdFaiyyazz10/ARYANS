const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

const collegeRoute = require('./routes/college.js')

const app = express()

app.use(cors())


dotenv.config({path:'./config/config.env'})

require('./config/database.js')

app.use(express.json())

app.use( collegeRoute )

// app.get('/',(req,res)=>{
//     res.send("<h1>Faiyyazz</h1>")
// })

app.listen(process.env.PORT,()=>{
    console.log(`Server is Running on Port:${process.env.PORT}`)
})