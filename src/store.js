import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./components/redux/products-redux/productSlice";
import cartReducer from "./components/redux/cart/CartSlice";

const store = configureStore({
  reducer: {
    product : productReducer,
    singleProduct : productReducer,
    cart: cartReducer
     
  },
});

export default store;