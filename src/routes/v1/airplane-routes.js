const express=require("express");
const {airplaneController} = require("../../controllers");
const {Airplanemiddleware} = require("../../middleware")
const router=express.Router();


// /api/v1/airplanes POST
router.post("/",Airplanemiddleware.validateCreateRequest,airplaneController.createAirplane);

module.exports=router;