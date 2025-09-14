import { createSlice } from "@reduxjs/toolkit";

import { fetchCars, fetchCarById } from "./operations";

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const slice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    selectedCar: null,
    loading: false,
    error: null,
    totalPages: 1,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const { cars, page, totalPages } = action.payload;
        const pageNumber = Number(page);

        if (pageNumber === 1) {
          state.items = cars; // якщо перша сторінка — оновлюємо повністю
        } else {
          const existingIds = new Set(state.items.map((car) => car.id));
          const newCars = cars.filter((car) => !existingIds.has(car.id));
          state.items.push(...newCars); // якщо наступна сторінка — додаємо
        }

        state.totalPages = totalPages;
      })
      .addCase(fetchCars.rejected, handleRejected)

      .addCase(fetchCarById.pending, handlePending)
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.selectedCar = action.payload;
      })
      .addCase(fetchCarById.rejected, handleRejected);
  },
});

export default slice.reducer;
