const mongoose =require('mongoose')

const Table = mongoose.Schema

const Pharmecy = new Table ({
    drug_id:{type:String,require:true},
    drug_name:{type:String,require:true},
    category:{type:String},
    usage:{type:String},
    form:{type:String},
    dosage:{type:String},
    manufacturer:{type:String},
    buyingdate:{type:String},
    expirydate:{type:String},
    supplier_id:[{id:{type:String},name:{type:String}}],
    supplier:[{contect_No:{type:Number},location:{type:[String]}}],
    stock:[{used:{type:String},needed:{type:String}}],
})

module.exports = mongoose.model("Pharmacy", Pharmecy)