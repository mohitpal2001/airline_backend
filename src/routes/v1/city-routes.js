const express = require("express");
const {cityController} = require("../../controllers");
const {Citymiddleware} = require("../../middleware")
const router = express.Router();

router.post("/",Citymiddleware.validateCreateRequest,cityController.createCity);
router.get("/",cityController.getAllCities);
router.get("/:id",cityController.getCity);
router.patch("/:id",cityController.updateCity);
router.delete("/:id",cityController.destroyCity);

module.exports = router; 