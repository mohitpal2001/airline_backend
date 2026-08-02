const { error } = require("winston");
const { cityService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { ErrorResponse, SuccessResponse } = require("../utils/common");



/**
 * 
POST : /cities 
request body : {name: 'city name'}
 */
async function  createCity(req,res){
    try{
        const response = await cityService.createCity({
            name:req.body.name
        })

        SuccessResponse.data = response;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    }catch(error){
        
        ErrorResponse.error = error;
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

async function getAllCities(req,res){
    try{
        const city = await cityService.getAllCities();
        SuccessResponse.data = city;
        return res.status(StatusCodes.OK).json(SuccessResponse);

    }catch(error){
       ErrorResponse.error = error;
       return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

async function getCity(req,res){
    try{
        const response = await cityService.getCity(req.params.id);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);

    }catch(error){
        ErrorResponse.error = error;
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

async function updateCity(req,res){
 try{
    const response = await cityService.updateCity(req.params.id,req.body);
    SuccessResponse.data = response;
    return res.status(StatusCodes.OK).json(SuccessResponse);

 }catch(error){
    ErrorResponse.error = error;
    return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
 }
}

async function destroyCity(req,res){
    try{
        const response = await cityService.destroyCity(req.params.id);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    }catch(error){
        ErrorResponse.error = error;
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

module.exports ={
    createCity,
    getAllCities,
    getCity,
    updateCity,
    destroyCity
}