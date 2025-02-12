const Pharmecy = require('../model/PharmecyTable')
const mongoose = require('mongoose')

const CreateTable = async (req,res) =>{
    const {
        drug_name,
        category,
        manufacturer,
        buyingdate,
        expirydate,
        quantity
    } = req.body

    try{
        const Datas = await Pharmecy.create({
            drug_name,
            category,
            manufacturer,
            buyingdate,
            expirydate,
            quantity
        })
        res.status(200).json(Datas)
    }
    catch(e){
        res.status(400).json({error:e.message})
    }
};

const GetAll = async (req,res) =>{
    try{
    const Datas = await (Pharmecy.find({}))
    res.status(200).json(Datas)
    }
    catch(e){
        res.status(400).json({error:e.message})
    }
};

const GetSingleData = async(req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id))
    {return res.status(404).json({message: 'data not found!'})}
    try{
        const Table = await Pharmecy.findById(id)
        res.status(200).json(Table)
    }
    catch(e)
    {
        res.status(400).json({error: e.message})
    }
}

const UpdataData = async(req,res) => {
    const {id} = req.params 
    if(!mongoose.Types.ObjectId.isValid(id)) 
    {return res.status(404).json({message :'data not found'})}
    try{
        const Table = await Pharmecy.findByIdAndUpdate( {
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
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({message: 'data not found'})
    }
    try{
        const Table = await Pharmecy.findByIdAndDelete(id);
        res.status(200).json(Table)
    }
    catch(e){
        res.status(400).json({error:e.message})
    };
}


module.exports ={CreateTable, GetAll, GetSingleData, UpdataData, DeleteData}