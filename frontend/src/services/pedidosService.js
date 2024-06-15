import axios from "axios";

const API_URL = 'http://localhost:4000/pedido'

const getAllPedidos = () => {
    return axios.get(API_URL)
}

const agregarPedido = (data) => {
    return axios.post(API_URL, data)
}

const deletePedido = (id) => {
    return axios.delete(`${API_URL}/${id}`)
}

const deleteAll = () => {
    return axios.delete(API_URL)
}

export default {getAllPedidos, agregarPedido, deletePedido, deleteAll}
