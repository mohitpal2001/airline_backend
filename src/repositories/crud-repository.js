const { StatusCodes } = require("http-status-codes");
const Logger = require("../config/logger");
const AppError = require("../utils/errors/app-error");
class CrudRepository {
    constructor(model){
        this.model = model;
    }

    async create(data){
        
            const result = await this.model.create(data);
            return result;
           
    }

    async destroy(data){
       
            const result = await this.model.destroy({
                where:{
                    id:data
                }
            });  
            if(!result){
                throw new AppError('the reasourse you want to delete is not present',StatusCodes.NOT_FOUND);
            } 
            return result;
    }
    

    async get(data){    
       
            const result = await this.model.findByPk(data);
            if(!result){
          throw new AppError('the reasourse you find is not present',StatusCodes.NOT_FOUND);
            }
            return result;
    }

    async getAll(){
        
            const result = await this.model.findAll();
            return result;
        
    }


    async update(data, id){
        
            const result = await this.model.update(data, {
                where: {
                    id: id
                }
            });

            if(!result){
                throw new AppError('the reasourse you want to update it  is not present',StatusCodes.NOT_FOUND);
            }
            return result;
        
    }
}

module.exports = CrudRepository;