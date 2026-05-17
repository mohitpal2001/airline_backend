const express=require("express");
const {airplaneController} = require("../../controllers");
const {Airplanemiddleware} = require("../../middleware")
const router=express.Router();


// /api/v1/airplanes POST
router.post("/",Airplanemiddleware.validateCreateRequest,airplaneController.createAirplane);
router.get("/",airplaneController.getAllAirplanes);
router.get("/:id",airplaneController.getAirplane);


module.exports=router;