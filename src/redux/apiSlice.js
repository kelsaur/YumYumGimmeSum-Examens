import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com";

export const fetchApiKey = createAsyncThunk("api/fetchApiKey", async () => {
  const response = await fetch(`${BASE_URL}/keys`, { method: "POST" })

  if (!response.ok) {
    throw new Error("Failed to fetch API key")
  }

  const data = await response.json()
  //console.log(data.key)
  return data.key
})

const apiSlice = createSlice( {
  name: "api",
  initialState: {
    apiKey: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchApiKey.pending, (state) => {
      state.status = "loading"
    })
    .addCase(fetchApiKey.fulfilled, (state, action) => {
      state.status = "succeeded"
      state.apiKey = action.payload
    })
    .addCase(fetchApiKey.rejected, (state, action) => {
      state.status = "failed"
      state.error = action.error.message
    })
  }
})

export default apiSlice.reducer