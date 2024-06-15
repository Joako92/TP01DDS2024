import { Router } from 'express';
import Producto from '../models/Producto.js';
import { where } from 'sequelize';

const router = Router();

// Listar todos los productos
router.get('/productos', async(req, res) => {
    try {
        const comercio = req.query.comercio || ""
        const productos = await Producto.findAll({where: comercio ? {comercio} : {}});
        res.json(productos);
    } catch (error) {
        res.status(500).json({ error: 'Error en el fetch de productos!'});
    }
});

// Buscar un producto
router.get('/productos/:id', async (req, res) => {
    try {
        const producto = await Producto.findByPk(parseInt(req.params.id));
        if (!producto) {
            res.status(404).json({ error: 'No se encontró el producto con el id ' + req.params.id });
            return;
        }
        res.json(producto);
    } catch (error) {
        res.status(500).json({ error: 'Error en el fetch de productos!'});
    }   
});

// Crear un producto
router.post('/productos', async (req, res) => {
    const nuevoProducto = req.body
    try {
        const producto = await Producto.create({
            nombre: nuevoProducto.nombre,
            detalle: nuevoProducto.detalle,
            imagen: nuevoProducto.imagen,
            comercio: nuevoProducto.comercio
    });
        res.status(201).json(producto);
    } catch (error) {
        res.status(500).json({ error: 'Error en la creación de producto!'});
    }
});

// Modificar unproducto
router.put('/productos/:id', async (req, res) => {
    try {
        const producto = await Producto.findByPk(req.params.id);
        if (!producto) {
            res.status(404).json({ error: 'No se encontró el producto con el id ' + req.params.id });
            return;
        }
        const updatedProducto = await producto.update(req.body);
        res.json(updatedProducto);
    } catch (error) {
        res.status(400).json({ error: 'Error actualizando producto!'});
    }
});

// Borrar unproducto
router.delete('/productos/:id', async (req, res) => {
    console.log(req.params.id)
    try {
        const producto = await Producto.findByPk(req.params.id);
        if (!producto) {
            res.status(404).json({ error: 'No se encontró el producto con el id ' + req.params.id });
            return;
        }
        await producto.destroy();
        res.json({ message: 'El producto ha sido eliminado' });
    } catch (error) {
        res.status(500).json({ error: 'Error eliminando el producto!'});
    }
});

export default router;