import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { customerAccessToken } from '../../../pages/Account/type';

interface customerStorageToken {
    customerStorageToken: customerAccessToken;
}

const initialState: customerStorageToken = {
    customerStorageToken: {
      accessToken:"",
      expiresAt:""
    },
};

const customerStorageTokenSlice = createSlice({
  name: 'customerStorageToken',
  initialState,
  reducers: {
    setcustomerStorageToken: (state, action: PayloadAction<customerAccessToken>) => {
      state.customerStorageToken = action.payload;
    },
    resetCustomerStorageToken: (state) => {
      Object.assign(state, initialState);
    }
  },
});

export const { setcustomerStorageToken,resetCustomerStorageToken } = customerStorageTokenSlice.actions;

export const customerToken = (state: RootState): customerStorageToken =>
  state.getCustomerToken;

export default customerStorageTokenSlice.reducer;
