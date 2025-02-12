const mongoose = require('mongoose')


const patientApp = new mongoose.Schema({

    patientId : 
    {
        type : Number,
        unique : true,
        default : ()=> Math.floor(100000 + Math.random() * 900000),
        required : true
    },

    patientName : {type : String},
    email : {type : String},

    doctor : {
        type : String,
        enum : ['yokesh', 'sanakiyan', 'pradeep', 'thillai', 'sowndhiriya'],
        default : function() {
            const doctors = ['yokesh', 'sanakiyan', 'pradeep', 'thillai', 'sowndhiriya'];
            return doctors[Math.floor(Math.random() *doctors.length)]
        }
    },

   
    appointmentDate : {
        type : Date,
        
        validate : {
            validator : function(value) {
                return value > new Date()
            },
            message : "Appointment date must be in the future."
        }
    },

    appointmentTime : {
        type : String,
        enum : ['9am - 10am', '10am - 11am', '11am - 12pm', '12pm - 1pm', '1pm - 2pm', '2pm - 3pm' ]
        
    },

    reasonforVisit : {
        type : String,
        enum : ['Cardiology', 'Neurology', 'Oncology', 'Orthology', 'Pulmonology'],
       
    },

    

}, { timestamps: true } )

const patientAppointment = mongoose.model('patientApp', patientApp)

module.exports = patientAppointment