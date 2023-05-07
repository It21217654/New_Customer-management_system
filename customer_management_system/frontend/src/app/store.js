import { configureStore } from '@reduxjs/toolkit';
import orderReducer from './slices/order.slice';

export const store = configureStore({
  reducer: {
    order: orderReducer,
  },
});