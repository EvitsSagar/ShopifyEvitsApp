import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { customerAccessToken } from '../../../pages/Account/type';

interface customerStorageToken {
   accessToken:string|null;
   expitesAt:string|null;
   isauthenticated:boolean;
}

const initialState: customerStorageToken = {
   accessToken:null,
   expitesAt:null,
   isauthenticated:false,
};

const customerStorageTokenSlice = createSlice({
  name: 'customerStorageToken',
  initialState,
  reducers: {
    setcustomerStorageToken: (
      state,
      action: PayloadAction<customerStorageToken>
    ) => {
      state.accessToken = action.payload.accessToken;
      state.expitesAt = action.payload.expitesAt;
      state.isauthenticated = action.payload.isauthenticated;
    },
    resetCustomerStorageToken: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const { setcustomerStorageToken,resetCustomerStorageToken } = customerStorageTokenSlice.actions;

// export const customerToken = (state: RootState): string|null =>
//   state.getCustomerToken.accessToken;

export const customerToken = (state: RootState): customerStorageToken =>
  state.getCustomerToken;

export default customerStorageTokenSlice.reducer;
