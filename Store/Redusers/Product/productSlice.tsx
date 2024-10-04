import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface productState {
  productid: string;
}

const initialState: productState = {
    productid: "",
};

const ProductIdSlice = createSlice({
  name: 'productid',
  initialState,
  reducers: {
    setProductId: (state, action: PayloadAction<string>) => {
      state.productid = action.payload;
    },
  },
});

export const { setProductId } = ProductIdSlice.actions;

export const selectProductId = (state: RootState): productState =>
  state.SelectedProductId;

export default ProductIdSlice.reducer;
