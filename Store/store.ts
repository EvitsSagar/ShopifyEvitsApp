import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from './ApiServices/axiosBaseQuery';
import ProductIdSlice from './Redusers/Product/productSlice';

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    SelectedProductId:ProductIdSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;