const mongoose = require('mongoose');

const Schema =mongoose.Schema;

const combosSchema = new Schema({
    
    nombre: {type:String, required:[true,'Nombre obligatorio']},
    contenido :{type:String,required:[true,'descripción obligatoria']},
    precio: {type:Number, required:[true,'Precio obligatorio']},
    date: {type:Date, default:Date.now},
    activo:{type:Boolean, default:true},
    // obsequio:String
});

//Convertir a modelo. 
module.exports = mongoose.model('Combos',combosSchema);
// const Combos = mongoose.model('Combos',combosSchema);
// export default Combos;