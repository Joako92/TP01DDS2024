import { useState, useEffect } from "react";
import comerciosApi from '../services/comerciosService.js';
import Productos from "./Productos.jsx";

// Funcion para cargar todos los comercios
export default function Comercios() {
    const [comercios, setComercios] = useState([]);  
    const [error, setError] = useState(null);
    const [selectedComercio, setSelectedComercio] = useState(null);

    // Pedir datos a la API
    const reqApi = async () => {
      try {
        const api = await comerciosApi.getAllComercios();
        setComercios(api.data);    
      } catch (err) {
        setError(err.message);
        console.error("Error fetching comercios!:", err);
      }
    };
  
    // Usa useEffect para hacer la solicitud API una sola vez cuando el componente se monte
    useEffect(() => {
      reqApi();
    }, []);

    // Maneja el clic en un comercio
    const handleComercioClick = (comercio) => {
      setSelectedComercio(comercio);
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    // Renderizar la lista de comercios o los productos dependiendo de si un comercio está seleccionado
    return (
        <div className="characters">
          {!selectedComercio ? (
            <>
              <h1 className="title">COMERCIOS</h1>
              <div className="container-characters">
                {comercios.map((comercio, index) => (
                    <button className="character-container" key={index} onClick={() => handleComercioClick(comercio)}>
                      <div>
                        {/* Imagen del comercio */}
                        <img className="imagenComercio" src={comercio.imagen} title="Imagen comercio" alt="Imagen" />
                      </div>
                      <div>
                        {/* Nombre del comercio */}
                        <h3>{comercio.nombre}</h3>
                        <h6>
                          {/* Estado del comercio (abierto/cerrado) */}
                          {comercio.status === "Abierto" ? (
                            <>
                              <span className="alive" />
                              Abierto
                            </>
                          ) : (
                            <>
                              <span className="dead" />
                              Cerrado
                            </>
                          )}
                        </h6>
                        <p>
                          {comercio.detalle}
                        </p>
                      </div>
                    </button>
                ))}
              </div>
            </>
          ) : (
            <>
              <button className="btn btn-primary" onClick={() => setSelectedComercio(null)}>Volver a Comercios</button>
              <Productos comercio={selectedComercio} />
            </>
          )}
        </div>
    );
}
