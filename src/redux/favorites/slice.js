import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "favorites",
  initialState: {
    cars: [],
  },
  reducers: {
    toggleCar: (state, action) => {
      const isCar = state.cars.some((car) => car.id === action.payload.id);

      if (!isCar) {
        state.cars.push(action.payload);
      } else {
        state.cars = state.cars.filter((car) => car.id !== action.payload.id);
      }
    },
  },
});

export const { toggleCar } = slice.actions;

export default slice.reducer;
