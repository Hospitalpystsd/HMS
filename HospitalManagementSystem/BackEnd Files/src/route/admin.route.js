const express= require ('express')
const { loginAdmin, addDoctor, appointmentsAdmin, appointmentCancel, allDoctors, adminDashboard }= require ("../controller/admin.controller.js")
const { changeAvailablity } =require ('../controller/doctorController.js');
const authAdmin =require ('../middleware/authAdmin.js')
const upload =require ('../middleware/multer.js');
const adminRouter = express.Router();


adminRouter.post("/login", loginAdmin)
adminRouter.post("/add-doctor", authAdmin, upload.single('image'), addDoctor)
adminRouter.get("/appointments", authAdmin, appointmentsAdmin)
adminRouter.post("/cancel-appointment", authAdmin, appointmentCancel)
adminRouter.get("/all-doctors", authAdmin, allDoctors)
adminRouter.post("/change-availability", authAdmin, changeAvailablity)
adminRouter.get("/dashboard", authAdmin, adminDashboard)

module.exports= adminRouter; 