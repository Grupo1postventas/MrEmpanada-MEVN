const express = require('express')
const router = express.Router();

const Bebidas = require('../models/bebidas');

//Agregar una bebidas
router.post('/bebidas-nueva', async (req, res) => {
    const body = req.body;
    try {
        const bebidasDB = await Bebidas.create(body);
        res.status(201).json(bebidasDB);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            err:error.message
        })
    }
})
//Get con parametro
router.get('/bebidas/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const bebidasDB = await Bebidas.findOne({ _id });
        res.json(bebidasDB);

    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            err:error.message
        })
    }
});

//Get con todos los documentos
router.get('/bebidas', async (req, res) => {
    try {
        const bebidasDB = await Bebidas.find();
        res.json(bebidasDB)
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            err:error.message
        })
    }
})

//Delete eliminar una bebidas
router.delete('/bebidas/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const bebidasDB = await Bebidas.findByIdAndDelete({ _id });
        if (!bebidasDB) {
            return res.status(400).json({
                mensaje: 'No se encontró el id indicado', error
            })
        } res.json(bebidasDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            err:error.message
        })
    }
})

//Actualizar bebidas
router.put('/bebidas/:id', async (req, res) => {

    const _id = req.params.id;
    const body = req.body;

    try {

        const bebidasDB = await Bebidas.findByIdAndUpdate(_id, body, { new: true });
        res.json(bebidasDB);

    } catch (error) {

        return res.status(500).json({

            mensaje: 'Ocurrio un error',
            err:error.message
        })
    }
})
// Exportar la configuración de express. 
module.exports = router;