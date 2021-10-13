const express = require('express')
const router = express.Router();

const Empanadas = require( '../models/empanadas');

//Agregar una empanada
router.post('/empanada-nueva', async (req, res) => {
    const body = req.body;
    try {
        const empanadaDB = await Empanadas.create(body);
        res.status(201).json(empanadaDB);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            err:error.message
        })
    }
})
//Get con parametro
router.get('/empanada/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const empanadaDB = await Empanadas.findOne({ _id });
        res.json(empanadaDB);

    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            err:error.message
        })
    }
});

//Get con todos los documentos
router.get('/empanada', async (req, res) => {
    try {
        const empanadaDB = await Empanadas.find();
        res.json(empanadaDB)
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            err:error.message
        })
    }
})

//Delete eliminar una empanada
router.delete('/empanadas/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const empanadaDB = await Empanadas.findByIdAndDelete({ _id });
        if (!empanadaDB) {
            return res.status(400).json({
                mensaje: 'No se encontró el id indicado', error
            })
        } res.json(empanadaDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            err:error.message
        })
    }
})

//Actualizar empanada
router.put('/empanada/:id', async (req, res) => {

    const _id = req.params.id;
    const body = req.body;

    try {

        const empanadaDB = await Empanadas.findByIdAndUpdate(_id, body, { new: true });
        res.json(empanadaDB);

    } catch (error) {

        return res.status(500).json({

            mensaje: 'Ocurrio un error',
            err:error.message
        })
    }
})
// Exportar la configuración de express. 
module.exports = router;