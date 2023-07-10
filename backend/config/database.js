const mongoose = require('mongoose')


mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('DataBase is Connected')
}).catch((err)=>{
    console.log(err)
})