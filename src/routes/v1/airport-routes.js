const express=require("express");
const {airportController} = require("../../controllers");
const {Airportmiddleware} = require("../../middleware")
const router=express.Router();


// /api/v1/airports POST
router.post("/",Airportmiddleware.validateCreateRequest,airportController.createAirport);
router.get("/",airportController.getAllAirports);
router.get("/:id",airportController.getAirport);
router.delete("/:id",airportController.destroyAirport);
router.patch("/:id",airportController.updateAirport);


module.exports=router;
