import { Router } from 'express';
import Comercio from '../models/Comercio.js';

const router = Router();

// Listar todos los comercios
router.get('/comercios', async(req, res) => {
    try {
        const comercios = await Comercio.findAll();
        res.json(comercios);
    } catch (error) {
        res.status(500).json({ error: 'Error en el fetch de comercios!'});
    }
});

// Buscar un comercio
router.get('/comercios/:id', async (req, res) => {
    try {
        const comercio = await Comercio.findByPk(parseInt(req.params.id));
        if (!comercio) {
            res.status(404).json({ error: 'No se encontró el comercio con el id ' + req.params.id });
            return;
        }
        res.json(comercio);
    } catch (error) {
        res.status(500).json({ error: 'Error en el fetch de comercios!'});
    }   
});

// Crear un comercio
router.post('/comercios', async (req, res) => {
    const nuevoComercio = req.body
    try {
        const comercio = await Comercio.create({
            id : nuevoComercio.id,
            nombre : nuevoComercio.nombre,
            status : nuevoComercio.status,
            imagen : nuevoComercio.imagen,
            detalle : nuevoComercio.detalle
        });
        res.status(201).json(comercio);
    } catch (error) {
        res.status(500).json({ error: 'Error en la creación de comercio!'});
    }
});

// Modificar un comercio
router.put('/comercios/:id', async (req, res) => {
    try {
        const comercio = await Comercio.findByPk(req.params.id);
        if (!comercio) {
            res.status(404).json({ error: 'No se encontró el comercio con el id ' + req.params.id });
            return;
        }
        const updatedComercio = await comercio.update(req.body);
        res.json(updatedComercio);
    } catch (error) {
        res.status(400).json({ error: 'Error actualizando comercio!'});
    }
});

// Borrar un comercio
router.delete('/comercios/:id', async (req, res) => {
    try {
        const comercio = await Comercio.findByPk(req.params.id);
        if (!comercio) {
            res.status(404).json({ error: 'No se encontró el comercio con el id ' + req.params.id });
            return;
        }
        await comercio.destroy();
        res.json({ message: 'El comercio ha sido eliminado' });
    } catch (error) {
        res.status(500).json({ error: 'Error eliminando el comercio!'});
    }
});

export default router;