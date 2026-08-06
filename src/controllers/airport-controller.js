const { error } = require("winston");
const {airportService} = require("../services");
const {StatusCodes} = require("http-status-codes");
const {ErrorResponse, SuccessResponse} = require("../utils/common");


/**
 * POST : /airports
 * req-body : {name, code, address, cityId} 
 */
async function createAirport(req,res){
    try{
        const response = await airportService.createAirport({
            name:req.body.name,
            code:req.body.code,
            address:req.body.address,
            cityId:req.body.cityId
        });
        SuccessResponse.data = response;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);   
    }catch(error){
        ErrorResponse.error = error;
        ErrorResponse.message = error.message;
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

async function getAllAirports(req,res){
     try{
        const response = await airportService.getAirports();
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);   
    }catch(error){
        ErrorResponse.error = error;
        ErrorResponse.message = error.message;
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

/****
 * GET  :  /airports/:id
 * req-body {}
 */
async function getAirport(req,res){
     try{
        const response = await airportService.getAirport(req.params.id);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);   
    }catch(error){
        ErrorResponse.error = error;
        ErrorResponse.message = error.message;
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

/****
 * DELETE  :  /airports/:id
 * req-body {}
 */
async function destroyAirport(req,res){
     try{
        const response = await airportService.destroyAirport(req.params.id);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);   
    }catch(error){
        ErrorResponse.error = error;
        ErrorResponse.message = error.message;
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}


async function updateAirport(req,res){
     try{
        const response = await airportService.updateAirport(req.body,req.params.id);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);   
    }catch(error){
        ErrorResponse.error = error;
        ErrorResponse.message = error.message;
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}



module.exports = {
    createAirport,
    getAllAirports,
    getAirport,
    destroyAirport,
    updateAirport
}
