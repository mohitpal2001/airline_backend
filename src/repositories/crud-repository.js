const Logger = require("../config/logger");
class CrudRepository {
    constructor(model){
        this.model = model;
    }

    async create(data){
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            Logger.error("Something went wrong in the crud repo:create");
            throw error;
        }   
    }

    async destroy(data){
        try {
            const result = await this.model.destroy({
                where:{
                    id:data
                }
            });   
            return result;
        } catch (error) {
            console.log("Something went wrong in crud repository");
            throw error;
        }
    }
    

    async get(data){    
        try {
            const result = await this.model.findbyPK(data);
            return result;
        } catch (error) {
            Logger.error("Something went wrong in the crud repo:get");
            throw error;
        }
    }

    async getAll(){
        try {
            const result = await this.model.findAll();
            return result;
        } catch (error) {
            Logger.error("Something went wrong in the crud repo:getAll");
            throw error;
        }
    }


    async update(data, id){
        try {
            const result = await this.model.update(data, {
                where:id
            });
            return result;
        } catch (error) {
            console.log("Something went wrong in crud repository");
            throw error;
        }
    }
}

module.exports = CrudRepository;