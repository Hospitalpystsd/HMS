const Blood_Bank = require('../Models/BloodBank')
const mongooes = require('mongoose')

const CreateTable = async(req,res) => {
    const {
        Blood_Id,
        Blood_Group,
        Volume,
        Storage: [{Temp,Location}],
        Collection_Date,
        Expiry_Pried,
        Status,
        Donor_Info:[{
            Donor_Id,
            Name,
            Age_Gender,
            Date,
            Donor_Type}]
    } = req.body

    try{
        const Datas = await Blood_Bank.create({
            Blood_Id,
            Blood_Group,
            Volume,
            Storage: [{Temp,Location}],
            Collection_Date,
            Expiry_Pried,
            Status,
            Donor_Info:[{
                Donor_Id,
                Name,
                Age_Gender,
                Date,
                Donor_Type}]
        })
        res.status(200).json(Datas)
    }
    catch(e){
        res.status(400).json({error:e.message})
    }
};
const GetAllData = async (req,res)=>{
    try{
        const Table = await (Blood_Bank.find({}));
        res.status(200).json(Table)
    }
    catch(e){
        res.status(400).json({error:e.message})
    }
};

const GetSingleData = async(req,res) =>{
    const {id} = req.params
    if(!mongooes.Types.ObjectId.isValid(id))
    {return res.status(404).json({message: 'data not found!'})}
    try{
        const Table = await Blood_Bank.findById(id)
        res.status(200).json(Table)
    }
    catch(e)
    {
        res.status(400).json({error: e.message})
    }
}

const UpdataData = async(req,res) => {
    const {id} = req.params 
    if(!mongooes.Types.ObjectId.isValid(id)) 
    {return res.status(404).json({message :'data not found'})}
    try{
        const Table = await Blood_Bank.findByIdAndUpdate( {
            _id:id
        },
        {
            ...req.body
        })
        res.status(200).json(Table)
      }
      catch(e){
        res.status(400),json({error: e.message})
      }
}

const DeleteData = async (req,res) => {
    const {id} = req.params
    if(!mongooes.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({message: 'data not found'})
    }
    try{
        const Table = await Blood_Bank.findByIdAndDelete(id);
        res.status(200).json(Table)
    }
    catch(e){
        res.status(400).json({error:e.message})
    };
}


module.exports ={CreateTable, GetAllData, GetSingleData, UpdataData, DeleteData}



