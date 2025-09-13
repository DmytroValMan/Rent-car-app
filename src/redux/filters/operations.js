import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBrands = createAsyncThunk(
  "filters/fetchBrands",
  async (_, thunkIPI) => {
    try {
      const response = await axios.get("/brands");
      return response.data;
    } catch (e) {
      return thunkIPI.rejectWithValue(e.message);
    }
  }
);
