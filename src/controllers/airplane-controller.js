const { error } = require("winston");
const {airplaneService} = require("../services");
const {StausCodes, StatusCodes} = require("http-status-codes");
const {ErrorResponse, SuccessResponse} = require("../utils/common");


/**
 * POST : /airplanes
 * req-body : {modelNumber,capacity} 
 */
async function createAirplane(req,res){
    try{
        const response = await airplaneService.createAirplane({
            modelNumber:req.body.modelNumber,
            capacity:req.body.capacity
        });
        SuccessResponse.data = response;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);   
    }catch(error){
        ErrorResponse.error = error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

async function getAllAirplanes(req,res){
     try{
        const response = await airplaneService.getAirplanes();
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);   
    }catch(error){
        ErrorResponse.error = error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

/****
 * GET  :  /airplanes/:id
 * req-body {}
 */
async function getAirplane(req,res){
     try{
        const response = await airplaneService.getAirplane(req.params.id);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);   
    }catch(error){
        ErrorResponse.error = error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

module.exports = {
    createAirplane,
    getAllAirplanes,
    getAirplane
}