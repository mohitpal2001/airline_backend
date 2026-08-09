const express=require("express");
const {flightController} = require("../../controllers");
const {Flightmiddleware} = require("../../middleware")
const router=express.Router();


// /api/v1/flights POST
router.post("/",Flightmiddleware.validateCreateRequest,flightController.createFlight);
router.get("/",flightController.getAllFlights);
router.get("/:id",flightController.getFlight);
router.delete("/:id",flightController.destroyFlight);
router.patch("/:id",flightController.updateFlight);


module.exports=router;
