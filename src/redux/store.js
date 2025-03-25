import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./Api/baseApi";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;
