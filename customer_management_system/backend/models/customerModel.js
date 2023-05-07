
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const customerSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    address: {
        type: String,
        required:true
    },
    contact_number:{
        type : Number,
        required:true
    },
    vehicle_number: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    NIC:{
        type:Number,
        required: true
    }
}, { timestamps: true})

module.exports = mongoose.model('customer',customerSchema)

