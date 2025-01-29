const express = require('express');
const Doctor_route = express.Router();

const {CreateTable, GetAllData, GetSingleData, UpdataData, DeleteData} = require('../Controler/Doctor_Control')

Doctor_route.post("/",CreateTable);
Doctor_route.get("/", GetAllData);
Doctor_route.get("/:id",GetSingleData)
Doctor_route.patch("/:id",UpdataData)
Doctor_route.delete("/:id",DeleteData)


module.exports = Doctor_route;