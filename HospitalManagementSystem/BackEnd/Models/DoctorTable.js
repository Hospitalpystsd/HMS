const mongoose = require('mongoose');
const Table = mongoose.Schema;


const Doctors = new Table ({

    doctor_id:{type:String,require:true,length:6},
    doctor_name:{type:String,require:true},
    date_of_birth:{type:String},
    gender:{type:String},
    contect_no:{type:Number},
    email:{type:String,},
    adderss:{type:[String],length:100},
    unit:[{department:{type:String},room:{type:Number}}],
    shift:{type:String},
    availability:{type:String},
    qualification:{type:[String]},
    experience:{type:String},
    joined_date:{type:String},
});

module.exports = mongoose.model("doctor_table",Doctors)