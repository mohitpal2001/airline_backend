const { StatusCodes } = require("http-status-codes");
const {FlightRepository} = require("../repositories");
const {Op}= require("sequelize");
const AppError = require("../utils/errors/app-error");

const flightRepository = new FlightRepository();

async function createFlight(data){
 try{
  const flight = await flightRepository.create(data);
  return flight;
 }catch(error){
    console.log(error);
  if(error.name=='SequelizeValidationError'){
   let explanation = [];
   error.errors.forEach((err)=>{
    explanation.push(err.message);
   });
   console.log(explanation);
   throw new AppError(explanation,StatusCodes.BAD_REQUEST);
  }
     throw new AppError('Cannot create a new Flight object',StatusCodes.INTERNAL_SERVER_ERROR);
 }
}

async function getAllflights(query){
    let customFilter = {};
    let sortFilter =[];
    if(query.trips){
        [departureAirportId, arrivalAirportId] = query.trips.split('-');
        customFilter.departureAirportId = departureAirportId;
        customFilter.arrivalAirportId = arrivalAirportId;
    } 

    if(query.price){
        const [minPrice, maxPrice] = query.price.split('-');
        customFilter.price = {[Op.between]: [minPrice, (maxPrice==undefined ? 100000 : maxPrice)]};
    }

    if(query.travellers){
        customFilter.totalSeats = {[Op.gte]: query.travellers};
    }
  
    if (query.tripDate) {
        const date = new Date(query.tripDate);
        const nextDate = new Date(date);
        nextDate.setDate(date.getDate() + 1);
        customFilter.departureTime = {
            [Op.gte]: date,
            [Op.lt]: nextDate
        };
    }

    if(query.sort){
        const params = query.sort.split(',');
        const sortFilters = params.map((param)=>param.split('_'));
        sortFilter = sortFilters;
    }
    try {

        const flights = await flightRepository.getAllFlights(customFilter, sortFilter);
        return flights;
    } catch (error) {
        console.log(error);
        throw new AppError('Cannot fetch data of all Flight data',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getFlight(id){
    try{
    const flight = await flightRepository.get(id);
    return flight;
    }catch(error){
        console.log(error);
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new AppError('The flight you are requested is not present',error.statusCode)
        }
     throw new AppError('Can not get data of this particular id',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyFlight(id){
  try{
    const response = await flightRepository.destroy(id);
    return response;

  }catch(error){
    if(error.statusCode==StatusCodes.NOT_FOUND){
        throw new AppError('The flight you are requested to delete is not present',error.statusCode)
        }
  throw new AppError('Cannot delete the flight',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function updateFlight(data,id){
 try{
    const response = await flightRepository.update(data,id);
    return response;

 }catch(error){
    if(error.statusCode==StatusCodes.NOT_FOUND){
     throw new AppError('The flight you are requested to update is not present',error.statusCode)
    }
  throw new AppError('Cannot update the flight',StatusCodes.INTERNAL_SERVER_ERROR);
 }
}

module.exports = {
    createFlight,
    getAllflights,
    getFlight,
    destroyFlight,
    updateFlight
}
