import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BACKEND_API;

export const ORDERAPI = {
  saveOrder: (data) => axios.post(`${BASE_URL}/api/orders`, data),
  getOrders: () => axios.get(`${BASE_URL}/api/orders`),
  getOrderById: (id) => axios.get(`${BASE_URL}/api/orders/${id}`),
  updateOrder: (id, updateData) => axios.put(`${BASE_URL}/api/orders/${id}`, updateData),
  deleteOrder: (id) => axios.delete(`${BASE_URL}/api/orders/${id}`),
};