const mongoose =require('mongoose')

const Table = mongoose.Schema

const Pharmecy = new Table ({

    drug_name:{type:String,require:true},
    quantity : {type:Number, require:true},
    category:{type:String},
    manufacturer:{type:String},
    buyingdate:{type:String},
    expirydate:{type:String},

    
})

module.exports = mongoose.model("Pharmacy", Pharmecy)