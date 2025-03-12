import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], //clicked items are stored here
  totalPrice: 0,
}

const cartSlice = createSlice ({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      //console.log(action.payload)

      const { id, name, price } = action.payload; // get the item data from ation
      //console.log("adding item: ", {id, name, price})
      const existingItem = state.items.find((item) => item.id === id)

      console.log("cart before: ", state.items)

      if(existingItem) {
        //console.log(updating existing item: ${existingItem.name} (id: ${existingItem.id}));
        existingItem.quantity += 1;
        existingItem.totalPrice += price;
      } else {
        //console.log(Adding new item: ${name} (id: ${id}));
        state.items.push({id, name, price, quantity: 1, totalPrice: price})
      }

      state.totalPrice = state.items.reduce((sum, item) => sum + item.totalPrice, 0)

      console.log("cart after: ", state.items)
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
    },

    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },

  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer