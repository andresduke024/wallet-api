const { request } = require("express");
const { UserMapper } = require("./user.mapper.js");
const { Encrypter } = require("../../../utils/encrypter/encrypter.js");

class UserMapperV1 extends UserMapper {

    /**
     * Represents an user mapper
     * @constructor
     * @param {Encrypter} encrypter 
     */
    constructor(encrypter) {
        super();
        this.encrypter = encrypter;
    }

    /**
     * @override
     * @param {request} req 
     * @returns {{identificationNumber, name, email, password, cellphone}}
     */
    async mapUser(req) {
        const { body } = req;

        const password = await this.encrypter.encrypt(body.password);

        return {
            identificationNumber: body.identificationNumber, 
            name: body.name, 
            email: body.email, 
            cellphone: body.cellphone,
            password
        }
    }
}

module.exports = { UserMapperV1 }