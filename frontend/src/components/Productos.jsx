import { useState, useEffect } from "react";
import pedidosApi from '../services/pedidosService.js'
import productosService from "../services/productosService.js";

// Funcion para cargar todos los productos
export default function Productos({ comercio }) {
    const [productos, setProductos] = useState([]);  
    const [error, setError] = useState(null);
    const [pedido, setPedido] = useState([])

    // Pedir datos a la API
    const reqApi = async () => {
      try {
        let api;
        if (comercio) {
          api = await productosService.getProductosByComercio(comercio.id)
        } else {
          api = await productosService.getAllProductos();
        }
        setProductos(api.data);    
      } catch (err) {
        setError(err.message);
        console.error("Error fetching productos!:", err);
      }
    };

    // Agregar un producto al pedido
    const addPedido = async (nuevoPedido) => {
      console.log(nuevoPedido)
      try {
        const api = await pedidosApi.agregarPedido(nuevoPedido)
        setPedido([...pedido, nuevoPedido])
      } catch (err) {
        setError(err.message)
        console.error("Error fetching nuevo pedido:", err)
      }
    }
  
    // Usa useEffect para hacer la solicitud API una sola vez cuando el componente se monte
    useEffect(() => {
      reqApi();
    }, []);

    if (error) {
      return <div>Error: {error}</div>;
    }

    // Armado de la grilla
    return (
        <div className="characters">
          <h1 className="title">{comercio ? `PRODUCTOS DE ${comercio.nombre}` : 'PRODUCTOS'}</h1>
          <div className="container-characters">
            {productos.map((producto, index) => (
              <div className="character-container" key={index}>
                <div>
                  {/* Imagen del producto */}
                  <img className="imagenComercio" src={producto.imagen} title="Imagen producto" alt="Imagen" />
                </div>
                <div>
                  {/* Nombre del producto */}
                  <h3>{producto.nombre}</h3>
                  <div>
                    {/* Detalles del producto */}
                    <h4>Detalles: </h4>
                    <span className="detalle">{producto.detalle}</span>
                  </div>
                  <p>
                    {/* Aca un link para los productos con el id del comercio */}
                    <button className="btn-search" onClick={() => {addPedido(producto)}}>Añadir al pedido</button>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
    );
  }
