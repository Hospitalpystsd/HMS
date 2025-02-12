const patientRegistration = require( "../model/patient.reg.model");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
// const passwordGenerate = require("../utils/generate");
const { generateToken } = require('../middleware/auth_token');
// const sendMailtoUser = require("../utils/email");

// const generateUniqueId = () => 'PAT' + Date.now();


const createpatientdata = async (req, res) => {
   
    try {
        console.log(req.body)
        
        const existpatient = await patientRegistration.findOne({ email: req.body.email })
        if(existpatient) return res.status(400).json({Message : "Email Already Registered "})
        
        
        const createdata = {
            ...req.body,
            
        }    

        // const uniqueId = generateUniqueId()   
        const patientRegsdata =  await patientRegistration.create(createdata)
        

        console.log(patientRegsdata)
        res.json(patientRegsdata)
    } catch (error) {
        console.log(error);
        res.json({
            Error : error.message
        })

    }
}

const loginPatient = async (req, res) => {
    try {
        let { email, password } = req.body
        const checkEmail = await patientRegistration.findOne({ email })
        if(!checkEmail) return res.status(404).json({Message : "Email is Not Registred"})
        const checkPassword = await patientRegistration.findOne({ password })
        if(!checkPassword) return res.status(404).json({Message : "Incorrect Password"})
        const token = generateToken(checkEmail)
        res.json({
            token : token,
            message : "Login Successfully",
            
        })   
           
    } catch (error) {
        res.json({
            Error : error.message
        })
    }
}





module.exports= {
        createpatientdata,
        loginPatient
}
// const getpatientdata = async (req, res) => {
//     try {
        
//         const { objectId } = req.query
//         const getdata =  await patientRegistration.findById(objectId)
//         if(!getdata) return res.status(404).json({Message : "Data Not found"})
//         res.status(200).json(getdata)
//     } catch (error) {
//         res.status(500).json({
//             Error : error.Message
//         })
//     }
// }

// // const editpatientdata = async (req, res) => {
// //     try {
// //         let editdatas = req.body
// //         const { objectId } = req.query
// //         const editdata = await patientRegistration.findByIdAndUpdate(objectId, editdatas, {new : true})
// //         if(!editdatas) return res.status(404).json({Message : "Data Not found"})
// //         res.json(editdata)
// //     } catch (error) {
// //         res.json({
// //             Error : error.message
// //         })
// //     }
// // }

// // const deletepatientdata = async (req, res) => {
// //     try {
// //         const { objectId } = req.query
// //         if (!objectId) return res.status(400).json({ Message: "Missing objectId in query" });
        
// //         const deletedata = await patientRegistration.findByIdAndDelete(objectId  )
// //         if(!deletedata) return res.status(404).json({Message : "Data Not found"})

// //         res.status(200).json({Message: "Data deleted successfully", Data: deletedata}) 

// //     } catch (error) {
// //         res.status(500).json({ Error: error.message });
// //     }
// // }

// module.exports = {
//     createpatientdata,
//     editpatientdata,
//     getpatientdata,
//      deletepatientdata
// }