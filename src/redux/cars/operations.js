import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://car-rental-api.goit.global";

export const fetchCars = createAsyncThunk(
  "cars/fetchAll",
  async ({ brand, rentalPrice, minMileage, maxMileage, page }, thunkAPI) => {
    try {
      const params = Object.fromEntries(
        Object.entries({
          brand,
          rentalPrice,
          minMileage,
          maxMileage,
        }).filter((entry) => entry[1] !== undefined && entry[1] !== "")
      );

      params.page = page;
      params.limit = 12;

      const response = await axios.get("/cars", {
        params,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchCarById = createAsyncThunk(
  "cars/fetchOne",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/cars/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
