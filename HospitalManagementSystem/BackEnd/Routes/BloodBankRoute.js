const express = require('express')
const Blood_Bank_Route = express.Router()

const{CreateTable, GetAllData, GetSingleData, UpdataData, DeleteData}= require('../Controler/Blood_Bank_Control')

Blood_Bank_Route.post("/",CreateTable);
Blood_Bank_Route.get("/", GetAllData);
Blood_Bank_Route.get("/:id",GetSingleData)
Blood_Bank_Route.patch("/:id",UpdataData)
Blood_Bank_Route.delete("/:id",DeleteData)

module.exports = Blood_Bank_Route