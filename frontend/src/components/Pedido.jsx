import React, { useState, useEffect } from "react";
import pedidoService from '../services/pedidosService.js'

// Funcion para cargar todos los pedidos
export default function Pedido() {
  const [rows, setRows] = useState([])

  // Trae los datos de la tabla
  useEffect(() => {
    const fetchData = async () => {
      let URL = "http://localhost:4000/pedido"
      const res = await fetch(URL)
      const data = await res.json()
      setRows(data)
    }

    fetchData()
  }, [])

  // Borra el producto de una fila
  const quitarProducto = async (productoQuitado) => {
    try {
      await pedidoService.deletePedido(productoQuitado.id)
      setRows(rows.filter(row => row.id !== productoQuitado.id));
    } catch (error) {
      console.error("Error borrando el producto:", error)
    }
  }

  // Borra toda la tabla
  const quitarTodo = async () => {
    try {
      await pedidoService.deleteAll()
      setRows([])
    } catch (error) {
      console.error("Error borrando el pedido:", error)
    }
  }
  
  // Cuerpo de la tabla
  const tbody = rows.map(e => 
    <tr key={e.id}>
      <td>{e.producto}</td>
      <td>{`$${e.precio}`}</td>
      <td><button className="btn btn-danger" onClick={() => {quitarProducto(e)}}>Quitar</button></td>
    </tr>
  )

   // Calcula el precio total
   const totalPrecio = rows.reduce((total, row) => total + row.precio, 0);

    // Armado de la grilla
    return (
      <div className="characters">
      <h1 className="title">TU PEDIDO</h1>
      <div>
        <table className="table-style" id="lista-pedido">
          <thead>
            <tr>
              <th scope="col">Producto</th>
              <th scope="col">Precio</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {tbody}
          </tbody>
          <tr>
            <td colSpan="1" style={{ textAlign: "right" }}><strong>Precio total:</strong></td>
            <td><strong>{`$${totalPrecio}`}</strong></td>
            <td><button className="btn btn-danger" onClick={quitarTodo}>Borrar todo el pedido</button></td>
          </tr>
        </table>
      </div>
    </div>
    );
  }
