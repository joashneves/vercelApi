const database = require('../models/index.js');
const controller = require('./Controller.js');
const UserServices = require('../services/UserServices.js');

const UserServices = new UserServices();

class UserController extends controller{
    constructor(){
        super(UserServices);
    }

    async listaUsers(req, res){
        return res.status(200).json({
            Test: "test"
        });
    }

}

module.exports = UserController;