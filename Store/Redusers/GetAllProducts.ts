import { createAction, createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import API_Service from "../ApiServices/axiosBaseQuery"



export const resetState_viewll_led_BL = createAction('viewAllProductReducer/resetState');

export const viewAllProductApi = createAsyncThunk('viewAllProductReducer/AuthpostApiData', async() => {
    try {
      const response = await API_Service.get(`/products.json`,{
        headers:{
            "Accept":`application/json`,
            "mode": 'no-cors',
            "X-Shopify-Access-Token": "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",
            'Content-Type': 'application/json'
        }
      })
      return response
    } catch (error) {
      throw error;
    }
  });
  


  // Create a slice to manage the state
  const viewAllProductReducer = createSlice({
    name: 'viewAllProductReducer',
    initialState: {
      error: null,
      loading: 'idle',
      data:null,
    },
    reducers: {
        resetState_viewll_led_BL: (state) => {
        // Reset the state to its initial values
        return {
          ...state,
          error: null,
          loading: 'idle',
          data:null,
        };
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(viewAllProductApi.pending, (state) => {
          state.loading = 'pending';
        })
        .addCase(viewAllProductApi.fulfilled, (state, action) => {
          state.loading = 'fulfilled';
          state.data = action.payload.data;
        })
        .addCase(viewAllProductApi.rejected, (state, action) => {
          state.loading = 'rejected';
        });
    },
  });
  
  export default viewAllProductReducer.reducer;