const Pharmecy = require('../Models/PharmecyTable')
const mongoose = require('mongoose')

const CreateTable = async (req,res) =>{
    const {
        drug_id,
        drug_name,
        category,
        usage,
        form,
        dosage,
        manufacturer,
        buyingdate,
        expirydate,
        supplier_id:[{id,name}],
        supplier:[{contect_no,location}],
        stock:[{used,needed}]
    } = req.body

    try{
        const Datas = await Pharmecy.create({
            drug_id,
            drug_name,
            category,
            usage,
            form,
            dosage,
            manufacturer,
            buyingdate,
            expirydate,
            supplier_id:[{id,name}],
            supplier:[{contect_no,location}],
            stock:[{used,needed}]
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
