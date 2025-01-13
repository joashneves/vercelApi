const Services = require('./Services.js');

class UserServices extends Services{
    constructor(){
        super('User');
    }

    async pegaTodosUsers(){
    const listaUser = await super.pegaTodosOsRegistros();
    return listaUser;
    }
        
}

module.exports = UserServices;