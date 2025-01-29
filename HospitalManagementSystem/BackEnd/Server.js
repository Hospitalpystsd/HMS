const express = require('express');
require('dotenv').config();
const mongo = require('mongoose');
const Doctor_route = require('./Routes/DoctorRoute');
const Pharmecy_route =require('./Routes/PharmecyRoute')
const Blood_Bank_Route = require('./Routes/BloodBankRoute')

const HMS =  express()

HMS.use(express.json());

mongo.connect(process.env.DB_URL)
.then(()=>{
    HMS.listen(process.env.PORT, ()=>{
        console.log("database connected.")
    })
})
.catch((e) => console.log(e));


HMS.use("/Doctors/",Doctor_route);
HMS.use("/Pharmecy/",Pharmecy_route);
HMS.use("/BloodBank/",Blood_Bank_Route);

