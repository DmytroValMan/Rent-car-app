export const selectCars = (state) => state.cars.items;
export const selectCarById = (state) => state.cars.selectedCar;
export const selectLoading = (state) => state.cars.loading;
export const selectError = (state) => state.cars.error;
export const selectTotalPages = (state) => state.cars.totalPages;
