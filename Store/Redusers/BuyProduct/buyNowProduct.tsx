import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface buyNowProductState {
    buyNowproductUrl: string;
}

const initialState: buyNowProductState = {
    buyNowproductUrl: "",
};

const buyNowProductUrlSlice = createSlice({
  name: 'buyNowproductUrl',
  initialState,
  reducers: {
    setBuynowProductUrl: (state, action: PayloadAction<string>) => {
      state.buyNowproductUrl = action.payload;
    },
  },
});

export const { setBuynowProductUrl } = buyNowProductUrlSlice.actions;

export const buyNowProductURL = (state: RootState): buyNowProductState =>
  state.BuyNowProductURL;

export default buyNowProductUrlSlice.reducer;
