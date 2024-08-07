import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: {},
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
  },
});

const { reducer, actions } = orderSlice;

export const { setOrders } = actions;

export default reducer;
