import { lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage.jsx")
);
const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() =>
  import("../../pages/CatalogPage/CatalogPage.jsx")
);
const CarPage = lazy(() => import("../../pages/CarPage/CarPage.jsx"));
import Header from "../Header/Header.jsx";
import ToastStyles from "./ToastStyles.js";

const App = () => {
  return (
    <>
      <Header />
      <main style={{ flexGrow: 1 }}>
        <Suspense fallback={<p>Loading, please, wait...</p>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:id" element={<CarPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
        <Toaster
          toastOptions={ToastStyles}
          containerStyle={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1000,
          }}
        />
      </main>
    </>
  );
};

export default App;
