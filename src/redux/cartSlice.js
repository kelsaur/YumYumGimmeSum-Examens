import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], //clicked items are stored here
  totalPrice: 0,
  totalQuantity: 0,
  eta: null,
  orderId: null,
  orderValue: 0,
  orderState: null,
}

const cartSlice = createSlice ({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      //console.log(action.payload)

      const { id, name, price } = action.payload; // get this item data from action
      const existingItem = state.items.find((item) => item.id === id)

      console.log("Cart before: ", JSON.parse(JSON.stringify(state.items)));

      if(existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += price;
      } else {
        //console.log(Adding new item: ${name} (id: ${id}));
        state.items.push({id, name, price, quantity: 1, totalPrice: price}) //add items to redux store
      }

      state.totalPrice = state.items.reduce((sum, item) => sum + item.totalPrice, 0)
      state.totalQuantity = state.items.reduce((sum, item) => sum + item.quantity, 0);


      console.log("Cart after: ", JSON.parse(JSON.stringify(state.items)));
    },

    removeItem: (state, action) => {
      const {id} = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity -= 1;
        existingItem.totalPrice -= existingItem.price;

        if (existingItem.quantity === 0) {
          state.items = state.items.filter((item) => item.id !== id)
        }
      }

      state.totalPrice = state.items.reduce((sum, item) => sum + item.totalPrice, 0)
      state.totalQuantity = state.items.reduce((sum, item) => sum + item.quantity, 0);

    },

    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },

    setOrderInfo: (state, action) => {
      console.log(action.payload) // data from api response
      state.eta = action.payload.eta;
      state.orderId = action.payload.orderId;
      state.orderState = action.payload.orderState;
    }
  },
});

export const { addItem, removeItem, clearCart, setOrderInfo } = cartSlice.actions;
export default cartSlice.reducer;

