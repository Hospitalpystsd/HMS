const Doctors = require('../Models/DoctorTable');
const mongoose = require('mongoose');

const CreateTable =async(req,res) =>{
    const {
        doctor_id, 
        doctor_name, 
        date_of_birth,
        gender,
        contect_no,
        email,
        adderss,
        unit:[{department,room}],
        shift,
        availability,
        qualification,
        experience,
        joined_date } = req.body

    try{
        const Table=await Doctors.create({
            doctor_id, 
            doctor_name, 
            date_of_birth,
            gender,
            contect_no,
            email,
            adderss,
            unit:[{department,room}],
            shift,
            availability,
            qualification,
            experience,
            joined_date});

        res.status(200).json(Table)
    }
    catch(e){
        res.status(400).json({error:e.message})
    }
};

const GetAllData = async (req,res)=>{
    try{
        const Table = await (Doctors.find({}));
        res.status(200).json(Table)
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
        const Table = await Doctors.findById(id)
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
        const Table = await Doctors.findByIdAndUpdate( {
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
        const Table = await Doctors.findByIdAndDelete(id);
        res.status(200).json(Table)
    }
    catch(e){
        res.status(400).json({error:e.message})
    };
}


module.exports ={CreateTable, GetAllData, GetSingleData, UpdataData, DeleteData}