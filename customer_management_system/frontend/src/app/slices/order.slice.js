import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { deleteOrder, getOrder, getOrderById, getOrders, saveOrder, updateOrder } from '../actions/Order.actions';

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    selectedOrder: null,
    orders: [],
  },
  reducers: {
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(saveOrder.fulfilled, (state, action) => {
        state.orders = [...state.orders, action.payload];
        toast.success("Saved Successfully");
    });
    builder.addCase(saveOrder.rejected, (state, action) => {
        toast.error("Something went wrong");
    });
    builder.addCase(getOrderById.fulfilled, (state, action) => {
      state.selectedOrder = action.payload;
    });
    builder.addCase(getOrderById.rejected, (state, action) => {
        toast.error("Something went wrong");
    });
    builder.addCase(getOrders.fulfilled, (state, action) => {
      state.orders = action.payload;
    });
    builder.addCase(getOrders.rejected, (state, action) => {
        toast.error("Something went wrong");
    });
    builder.addCase(updateOrder.fulfilled, (state, action) => {
      state.orders = state.orders.map((x) => (x._id === action.payload._id ? action.payload : x));
      toast.success("Edited Successfully");
    });
    builder.addCase(updateOrder.rejected, (state, action) => {
        toast.error("Something went wrong");
    });
    builder.addCase(deleteOrder.fulfilled, (state, action) => {
      state.orders = state.orders.filter((x) => x._id !== action.payload._id);
      toast.success("Deleted Successfully");
    });
    builder.addCase(deleteOrder.rejected, (state, action) => {
        toast.error("Something went wrong");
    });
  },
});

export const { } = orderSlice.actions;

export default orderSlice.reducer;