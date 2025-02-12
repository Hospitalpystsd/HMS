const express = require('express');
require('dotenv').config();
const cors = require('cors');
const connectDB = require('./config/mongodb.js');
const connectCloudinary = require('./config/cloudinary.js');
const patientreg_Route = require('./route/patient.reg.route.js');
const patient_appointment = require('./route/patient.appoinement.route.js');
const Doctor_route = require('./route/DoctorRoute.js');
const Pharmecy_route = require('./route/PharmecyRoute.js');
const Blood_Bank_Route = require('./route/BloodBankRoute.js');
const adminRouter = require('./route/admin.route.js');
const userRouter = require('./route/user.route.js');
const doctorRouter = require ('./route/doctor.route.js');

const app = express()
const Port = process.env.PORT

app.use(cors())
app.use(express.json())
connectDB()
connectCloudinary()

app.use('/v1', patientreg_Route)
app.use('/v2', patient_appointment)
app.use("/Doctors/",Doctor_route);
app.use("/Pharmecy/",Pharmecy_route);
app.use("/BloodBank/",Blood_Bank_Route);
app.use("/api/admin", adminRouter)
app.use("/api/user", userRouter)
app.use("/api/doctor", doctorRouter)


app.use('/', (req, res) => {
    res.send('Hospital Management System')
})


app.listen(Port, () => {
    console.log(`server is running in port http://localhost:${Port}`)
})