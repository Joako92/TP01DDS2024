import { Router } from "express";
import Pedido from '../models/Pedido.js'

const router = Router()

// Listar pedido
router.get("/pedido", async(req, res) => {
    try {
        const pedido = await Pedido.findAll()
        res.json(pedido)
    } catch (error) {
        res.status(500).json({ error: 'Error en el fetch del pedido'})
    }
})

// Borrar un pedido
router.delete("/pedido/:id", async (req, res) => {
    try {
        const pedido = await Pedido.findByPk(req.params.id)
        if (!pedido) {
            res.status(404).json({ error: 'No se encontro un producto con el id:' + req.params.id})
        }
        await pedido.destroy()
        res.json({message: 'Producto borrado'})
    } catch (error) {
        res.status(500).json({error: 'Error eliminando el producto'})
    }
})

// Borrar todo el pedido
router.delete("/pedido", async (req, res) => {
    try {
        await Pedido.destroy({ where: {} })
        res.json({message: 'Pedido borrado'})
    } catch (error) {
        res.status(500).json({error: 'Error eliminando el pedido'})
    }
})

// Crear un pedido
router.post("/pedido", async (req, res) => {
    const nuevoPedido = req.body
    try {
        const pedido = await Pedido.create({ producto: nuevoPedido.nombre, precio: nuevoPedido.precio })
        res.status(201).json(pedido)
    } catch (error) {
        res.status(500).json({error: 'Error agregando el producto'})
        console.log(error)
    }
})

export default router