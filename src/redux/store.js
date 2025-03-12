import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice" //slice that manages menu STATE
import apiReducer from "./apiSlice"
import tenantReducer from "./tenantSlice"
import cartReducer from "./cartSlice"

const store = configureStore({
  reducer: {
    menu: menuReducer, //register menuSlice in Redux, this creates STORE.MENU
    api: apiReducer,
    tenant: tenantReducer,
    cart: cartReducer,
  }
})

export default store