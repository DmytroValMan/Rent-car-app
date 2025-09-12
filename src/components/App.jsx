import { lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../pages/CatalogPage/CatalogPage.jsx"));
const CarPage = lazy(() => import("../pages/CarPage/CarPage.jsx"));
import Header from "./Header/Header.jsx";

// const toastStyles = {
//   style: {
//     padding: "16px 24px",
//     borderRadius: "10px",
//     fontSize: "20px",
//     fontWeight: "500",
//     boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
//     textAlign: "center",
//   },
//   success: {
//     style: {
//       background: "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)",
//       color: "#065f46",
//     },
//     iconTheme: {
//       primary: "#10b981",
//       secondary: "#fff",
//     },
//   },
//   error: {
//     style: {
//       background: "linear-gradient(135deg, #f85032 0%, #e73827 100%)",
//       color: "#fff",
//     },
//     iconTheme: {
//       primary: "#fff",
//       secondary: "#f87171",
//     },
//   },
// };

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
        {/* <Toaster
      // toastOptions={toastStyles}
      containerStyle={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 1000,
      }}
    /> */}
      </main>
    </>
  );
};

export default App;
