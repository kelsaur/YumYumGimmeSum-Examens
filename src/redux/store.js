import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice" //slice that manages menu STATE

const store = configureStore({
  reducer: {
    menu: menuReducer, //register menuSlice in Redux, this creates STORE.MENU
  }
})

export default store