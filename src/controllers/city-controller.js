const { error } = require("winston");
const {cityService} = require("../services");
const {StausCodes, StatusCodes} = require("http-status-codes");
const {ErrorResponse, SuccessResponse} = require("../utils/common");

async function  createCity(req,res){
    try{
        const response = await cityService.createCity({
            name:req.body.name
        })

    }catch(error){

    }
}

module.exports ={
    createCity
}