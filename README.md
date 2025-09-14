# RentalCar Web Application

**RentalCar** is a frontend web application developed for fictional car rental companies. The app allows users to browse a catalog of rental cars, mark favorites, view detailed information about each vehicle, apply filters, and submit a booking request.

## 🚀 Live Demo

👉 [View Live on Vercel](https://rent-car-app-livid.vercel.app/)

## 📂 Repository

👉 [GitHub Repository](https://github.com/DmytroValMan/Rent-car-app)

---

## 📌 Project Overview

### 🧩 Features

- **Homepage** with call-to-action banner
- **Catalog page** displaying rental cars with:
  - Filtering by brand, price, and mileage
  - Server-side pagination
  - "Add to favorites" functionality with local storage support
- **Details page** for individual cars with:
  - Full car description
  - Image gallery
  - Booking form with validation
- **Favorites list** persists after page reloads
- **Booking form** with date selection, validation and notification on success
- **Load more** button for paginated results
- **Routing** using React Router (`/`, `/catalog`, `/catalog/:id`)

---

## 🛠️ Tech Stack

- **React** (with Vite)
- **Redux Toolkit** for global state management
- **Axios** for API requests
- **React Router DOM** for routing
- **React Hot Toast** for notifications
- **React Spinners** for loading indicators
- **Formik + Yup** for form validation
- **React DatePicker** for calendar input
- **CSS Modules** for styling

---

## 🔄 Backend API

Data is fetched from a public car rental API:  
📄 [API Documentation](https://car-rental-api.goit.global/api-docs/)

---

## 📁 Folder Structure

src/
│
├── components/ # Reusable UI components (App, Header, CarList, etc.)
├── pages/ # Page-level components (HomePage, CatalogPage, CarPage, NotFoundPage)
├── redux/ # Redux Toolkit slices and store configuration
├── index.css # Global variables and shared styles
└── main.jsx # Entry point

🧑‍💻 Author

Dmytro Manshylin
🔗 [GitHub Profile](https://github.com/DmytroValMan)

📃 License

This project is intended for demonstration purposes only and is not licensed for commercial use.
