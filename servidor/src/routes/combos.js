const express = require('express')
const router = express.Router();

const Combos = require('../models/combos');

//Agregar una combos
router.post('/combos-nueva', async (req, res) => {
    const body = req.body;
    try {
        const combosDB = await Combos.create(body);
        res.status(201).json(combosDB);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            err:error.message
        })
    }
})
//Get con parametro
router.get('/combos/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const combosDB = await Combos.findOne({ _id });
        res.json(combosDB);

    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            err:error.message
        })
    }
});

//Get con todos los documentos
router.get('/combos', async (req, res) => {
    try {
        const combosDB = await Combos.find();
        res.json(combosDB)
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            err:error.message
        })
    }
})

//Delete eliminar una combos
router.delete('/combos/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const combosDB = await Combos.findByIdAndDelete({ _id });
        if (!combosDB) {
            return res.status(400).json({
                mensaje: 'No se encontró el id indicado', error
            })
        } res.json(combosDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            err:error.message
        })
    }
})

//Actualizar combos
router.put('/combos/:id', async (req, res) => {

    const _id = req.params.id;
    const body = req.body;

    try {

        const combosDB = await Combos.findByIdAndUpdate(_id, body, { new: true });
        res.json(combosDB);

    } catch (error) {

        return res.status(500).json({

            mensaje: 'Ocurrio un error',
            error
        })
    }
})
// Exportar la configuración de express. 
module.exports = router;