import axios from 'axios';

const API_URL = 'http://localhost:4000/comercios';

const getAllComercios = () => {
  return axios.get(API_URL);       // ¿No son consultas asincronas?
};

// const getAllComercios = async () => {
//   return await axios.get(API_URL);     // poner un metodo try catch para evitar errores del servidor
// };

const getComercioById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

const createComercio = (data) => {
  return axios.post(API_URL, data);
};

const updateComercio = (id, data) => {
  return axios.put(`${API_URL}/${id}`, data);
};

const deleteComercio = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

export default {
  getAllComercios,
  getComercioById,
  createComercio,
  updateComercio,
  deleteComercio
};