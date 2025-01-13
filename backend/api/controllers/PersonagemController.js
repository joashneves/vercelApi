const Constroller = require('./Controller.js');
const FranquiaController = require('./FranquiaController.js');

const franquiaController = new FranquiaController();

class PersonagemController extends Constroller{
    constructor(){
        super(franquiaController)
    }
}

module.exports = PersonagemController;