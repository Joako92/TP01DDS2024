import axios from "axios";

const API_URL = 'http://localhost:4000/productos'

const getAllProductos = () => {
    return axios.get(API_URL)
}

const getProductosById = (id) => {
    return axios.get(`${API_URL}/${id}`)
}

const getProductosByComercio = (comercio) => {
    return axios.get(`${API_URL}?comercio=${comercio}`);
};

export default { getAllProductos, getProductosById, getProductosByComercio }