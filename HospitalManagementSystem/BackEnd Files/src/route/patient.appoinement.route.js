const express = require('express')
const router = express.Router()
const controller = require('../controller/patient.appoinment.controller')

router.post('/patientappointment', controller.createAppoinment)


module.exports = router;
