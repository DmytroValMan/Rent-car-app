// import { createSelector } from "@reduxjs/toolkit";

// import { selectNameFilter } from "../filters/selectors";

export const selectCars = (state) => state.cars.items;
export const selectCarById = (state) => state.cars.selectedCar;
export const selectLoading = (state) => state.cars.loading;
export const selectError = (state) => state.cars.error;
// export const selectPage = (state) => state.cars.page;
export const selectTotalPages = (state) => state.cars.totalPages;

// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectNameFilter],
//   (contacts, searchField) => {
//     return contacts.filter((contact) => {
//       return (
//         contact.name.toLowerCase().includes(searchField.toLowerCase()) ||
//         contact.number.includes(searchField)
//       );
//     });
//   }
// );
