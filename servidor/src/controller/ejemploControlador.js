const { response } = require("express")

module.exports = class ejemploControlador {

    static async saludoUno(re1, res) {
        response.send('Hola a todos');
    }

    static async saludoUno(re1, res) {
        response.status(200).json({message:'Saludos'});
    }
}