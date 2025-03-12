import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com";

const storedTenantId = localStorage.getItem("tenantId") || null;

export const registerTenant = createAsyncThunk("tenant/registerTenant", async ({apiKey}, {rejectWithValue}) => {
  try {
    const response = await fetch(`${BASE_URL}/tenants`, {
      method: "POST",
      headers: {
        "x-zocom": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: "HelloFoodTrux3"})
    })

    if(!response.ok) {
      const errorData = await response.json()
      return rejectWithValue(errorData)
    }

    const data = await response.json()
    console.log("tenant registered!: ", data.id)

    localStorage.setItem("tenantId", data.id)

    return data.id
  } catch (error) {
    return rejectWithValue(error.message)
  }
})

const tenantSlice = createSlice({
  name: "tenant", 
  initialState: {
    tenantId: storedTenantId,
    status: storedTenantId ? "succeeded" : "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerTenant.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerTenant.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tenantId = action.payload; // store tenant id here
       
      })
      .addCase(registerTenant.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  }
})

export default tenantSlice.reducer