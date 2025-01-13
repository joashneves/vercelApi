const database = require('../models/index.js');
const controller = require('./Controller.js');
const UserServices = require('../services/UserServices.js');

const userServices = new UserServices();

class UserController extends controller {
    constructor() {
        super(userServices);
    }

    async listaUsers(req, res) {
        try {
            const listaUsers = await userServices.pegaTodosUsers()
            return res.status(200).json(listaUsers);
        } catch (erro) {
            console.error(erro);
        }
    }

}

module.exports = UserController;