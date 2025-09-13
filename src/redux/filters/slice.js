import { createSlice } from "@reduxjs/toolkit";
import { fetchBrands } from "./operations.js";

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const initialState = {
  brand: "",
  brands: [],
  rentalPrice: "",
  minMileage: "",
  maxMileage: "",
  page: 1,
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetFilters: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrands.pending, handlePending)
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.brands = action.payload;
      })
      .addCase(fetchBrands.rejected, handleRejected);
  },
});

export const { changeFilter, resetFilters } = slice.actions;

export default slice.reducer;
