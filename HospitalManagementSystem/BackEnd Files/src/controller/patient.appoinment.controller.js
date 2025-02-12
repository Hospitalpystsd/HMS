const { default: Stripe } = require('stripe')
const nodemailer = require('nodemailer')
const patientAppointment = require('../model/patient.appoinment.model')
const sendMailtoUser = require('../utils/email')
const createAppoinment = async (req, res) => {
    try {

        console.log(req.body)
        
        const exitdate = await patientAppointment.findOne({appointmentDate : req.body.appointmentDate})
        const existtime = await patientAppointment.findOne({ appointmentTime: req.body.appointmentTime })
        if(existtime && exitdate) return res.status(400).json({Message : "try another time "})
        
        
        const data = {
            ...req.body,
            
        }  
        // const data = req.body
        // const appointmentdateandtime = await patientAppointment.find({Appoinemtdate : req.body.appointmentDate, appointmentTime : req.body.appointmentTime })
        // if(appointmentdateandtime) return res.status(404).json({Message : "Try Another Appointment date/time"})
        const newAppointment = await patientAppointment.create(data)
        
        await sendMailtoUser(req.body.email, newAppointment.doctor, req.body.appointmentDate, req.body.appointmentTime, newAppointment.patientId, req.body.patientName )
        res.status(201).json({newAppointment, Message : "Appointment booked successfully", })
       
        console.log(sendMailtoUser)
        console.log(newAppointment)
        

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    createAppoinment
}

 // try {
    //     let appointmentData = req.body
    //     const newappointmentData = await patientAppointment.create(appointmentData)
    //     res.json(newappointmentData)
    // } catch (error) {
    //     res.json({Error : error.message})
    // }

    // const patients = await patientAppointment.findOne({patientId})
        // await patientAppointment.findByIdAndUpdate(patientId, { $push : { patientAppointment : newAppoinment }})