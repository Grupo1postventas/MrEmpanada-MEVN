import mongoose from 'mongoose';


const Schema = mongoose.Schema;
const usuarioSchema = new Schema({
    nombre: { type: String, required: [true, 'Nombre obligatorio'] },
    descripcion: String,
    usuarioId: String,
    date: { type: Date, default: Date.now },
    activo: { type: Boolean, default: true }
});

// Convertir a modelo
const Usuario = mongoose.model('Usuario', usuarioSchema);
export default Usuario;