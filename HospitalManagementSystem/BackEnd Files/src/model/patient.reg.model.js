const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const { v4  } = require('uuid')




const patientReg = new mongoose.Schema({

    userId : {
        type : Number,
        unique : true,
        default : ()=> Math.floor(100000 + Math.random() * 900000),
        required : true
    },

    firstName : {
        type : String,
        required : true
    },

    lastName : {
        type : String,
        required : true
    },

    dateofBirth : {
        type : String,
        required : true
    },

    Gender : {
        type : String,
        enum : ['Male', 'Female', 'Other'],
        required : true
    },

    Address : {
        type : String,
        required : true
    },

    maritalStatus : {
        type : String,
        enum : ['Single', 'Married']
    },

    contactNumber : {
        type : Number,
        required : true
    },

    email : {
        type : String,
        trim : true,
        required : true,
        unique : true
    },

    

    password : {
        type : String,
        required : true
    }
}, { timestamps: true } )

// patientReg.pre('save', async function(next){
//     if(!this.isModified('password')) return next()
//     const salt = await bcrypt.genSalt(10)
//     this.password = await bcrypt.hash(this.password, salt)
//     next()    
// })

const patientRegistration = mongoose.model('patientReg', patientReg)

module.exports = patientRegistration