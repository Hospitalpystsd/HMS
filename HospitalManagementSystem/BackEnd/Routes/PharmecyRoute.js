const express = require('express')
const Pharmecy_route = express.Router()

const {CreateTable, GetAll, GetSingleData, UpdataData, DeleteData} = require('../Controler/Pharmacy_Control')

Pharmecy_route.post("/", CreateTable);
Pharmecy_route.get("/",GetAll);
Pharmecy_route.get("/:id",GetSingleData)
Pharmecy_route.patch("/:id",UpdataData)
Pharmecy_route.delete("/:id",DeleteData)

module.exports = Pharmecy_route;