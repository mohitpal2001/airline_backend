const { error } = require("winston");
const {flightService} = require("../services");
const {StatusCodes} = require("http-status-codes");
const {ErrorResponse, SuccessResponse} = require("../utils/common");


/**
 * POST : /flights
 * req-body : {flightNumber, airplaneId, departureAirportId, arrivalAirportId, arrivalTime, departureTime, price, boardingGate, totalSeats} 
 */
async function createFlight(req,res){
    try{
        const response = await flightService.createFlight({
            flightNumber:req.body.flightNumber,
            airplaneId:req.body.airplaneId,
            departureAirportId:req.body.departureAirportId,
            arrivalAirportId:req.body.arrivalAirportId,
            arrivalTime:req.body.arrivalTime,
            departureTime:req.body.departureTime,
            price:req.body.price,
            boardingGate:req.body.boardingGate,
            totalSeats:req.body.totalSeats
        });
        SuccessResponse.data = response;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);   
    }catch(error){
        ErrorResponse.error = error;
        ErrorResponse.message = error.message;
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

async function getAllFlights(req,res){
     try{
        const response = await flightService.getAllflights(req.query);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);   
    }catch(error){
        ErrorResponse.error = error;
        ErrorResponse.message = error.message;
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

/****
 * GET  :  /flights/:id
 * req-body {}
 */
async function getFlight(req,res){
     try{
        const response = await flightService.getFlight(req.params.id);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);   
    }catch(error){
        ErrorResponse.error = error;
        ErrorResponse.message = error.message;
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

/****
 * DELETE  :  /flights/:id
 * req-body {}
 */
async function destroyFlight(req,res){
     try{
        const response = await flightService.destroyFlight(req.params.id);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);   
    }catch(error){
        ErrorResponse.error = error;
        ErrorResponse.message = error.message;
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}


async function updateFlight(req,res){
     try{
        const response = await flightService.updateFlight(req.body,req.params.id);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);   
    }catch(error){
        ErrorResponse.error = error;
        ErrorResponse.message = error.message;
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}



module.exports = {
    createFlight,
    getAllFlights,
    getFlight,
    destroyFlight,
    updateFlight
}
