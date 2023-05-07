import { createAsyncThunk } from "@reduxjs/toolkit";
import { ORDERAPI } from "../apis/order.api";


export const saveOrder = createAsyncThunk(
  "book/saveOrder",
  async (data) => {
      const response = await ORDERAPI.saveOrder(data);
      return response.data;
  }
);

export const getOrders = createAsyncThunk("order/getOrders", async () => {
  const response = await ORDERAPI.getOrders();
  return response.data;
});

export const getOrderById = createAsyncThunk("order/getOrderById", async (id) => {
  const response = await ORDERAPI.getOrderById(id);
  return response.data;
});

export const updateOrder = createAsyncThunk(
  "company/updateBook",
  async (updateData) => {
    const response = await ORDERAPI.updateOrder(
      updateData._id,
      updateData
    );
    return response.data;
  }
);

export const deleteOrder = createAsyncThunk(
  "book/deleteBook",
  async (id) => {
    const response = await ORDERAPI.deleteOrder(id);
    return response.data;
  }
);