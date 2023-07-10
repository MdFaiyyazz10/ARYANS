const mongoose = require('mongoose')




const college =  new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    placement_ratio:{
        type: String,
        required: true
    },
    average_ratio:{
        type: String,
        required: true
    },
    cuttOff:{
        type: String,
        required: true
    },
    website:{
        type: String,
        required: true
    },
    autonomous:{
        type: String,
        required: true
    },
    rank:{
        type: Number,
        required: true
    },
}, {timestamps:true})


const College = new mongoose.model('College', college)

module.exports = College