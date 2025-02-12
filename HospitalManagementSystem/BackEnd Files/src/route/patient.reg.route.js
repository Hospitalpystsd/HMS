const express = require ('express')


const router = express.Router()

const controller = require('../controller/patient.reg.controller')

router.post('/patientreg', controller.createpatientdata)
router.post('/patientlogin', controller.loginPatient)
// router.put('/editpatientdata', controller.editpatientdata)
// router.get('/getpatientdata', controller.getpatientdata)
// router.delete('/deletepatientdata', controller.deletepatientdata)

module.exports= router;
