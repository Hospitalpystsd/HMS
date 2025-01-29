const mongooes = require('mongoose')

const Table = mongooes.Schema

const BloodBank = new Table ({
    Blood_Id:{type:String,require:true},
    Blood_Group:{type:String,require:true},
    Volume:{type:String},
    Storage: [{Temp:{type:String},Location:{type:String}}],
    Collection_Date:{type:String},
    Expiry_Pried:{type:String},
    Status:{type:String},
    Donor_Info:[{
        Donor_Id:{type:String,require:true},
        Name:{type:String,require:true},
        Age_Gender:{type:String},
        Blood_Id:{type:String},
        Blood_Group:{type:String},
        Volume:{type:String},
        Date:{type:String},
        Donor_Type:{type:String}
    }]
});

module.exports = mongooes.model("Blood_Bank",BloodBank)

