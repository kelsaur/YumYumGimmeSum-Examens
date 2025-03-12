import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMenu = createAsyncThunk("menu/fetchMenu", async (apiKey) => {
  const BASE_URL = "https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com";

  const response = await fetch(`${BASE_URL}/menu`, {
      method: "GET",
      headers: { "x-zocom": apiKey},
  })
  
  if(!response.ok) {
    throw new Error("Failed to fetch menu")
  }
  const data = await response.json()
  //console.log(data.items)
  return data.items
  
})


//create a slice of state with a reducer inside it
const menuSlice = createSlice({
  name: "menu", //create "menu" in Redux store
  initialState: {
    items: [], //store meny data -> STORE.MENU.ITEMS
    status: "idle", //idle tills fetchMenu anropas, sen: pending/loadingSucceeded/failed
    error: null, //error msg if fetch fails
  },
  reducers: {
    //inga vanliga reducers behövs denna ggn, eftersom vi bara för ett api anrop & den logiken är asynkron
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchMenu.pending, (state) => {
      state.status = "loading"
    })
    .addCase(fetchMenu.fulfilled, (state, action) => {
      console.log(action.payload)
      state.status = "succeeded"
      state.items = action.payload; //updates STORE.MENU.ITEMS
    })
    .addCase(fetchMenu.rejected, (state, action) => {
      state.status = "failed"
      state.error = action.error.message
    })
  }
})

export default menuSlice.reducer; //exports only the reducer