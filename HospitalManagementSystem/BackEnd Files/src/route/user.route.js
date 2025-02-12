const express = require ("express")
const { RegisterUser, loginUser, getProfile, updateProfile, listAppointment, cancelAppointment, bookAppointment } = require ("../controller/user.controller.js")
const authUser = require ('../middleware/authUser.js');
const upload = require ('../middleware/multer.js');
const userRouter = express.Router();


userRouter.post("/register", RegisterUser)
userRouter.post("/login", loginUser)

userRouter.get("/get-profile", authUser, getProfile)
userRouter.post("/update-profile", upload.single('image'),authUser, updateProfile)
userRouter.post("/book-appointment", authUser, bookAppointment)
userRouter.get("/appointments", authUser, listAppointment)
userRouter.post("/cancel-appointment", authUser, cancelAppointment)




module.exports= userRouter;