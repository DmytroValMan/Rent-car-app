import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));
import Layout from "./Layout/Layout";
import RestrictedRoute from "./RestrictedRoute.jsx";
import PrivateRoute from "./PrivateRoute";
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
import { refreshUser } from "../redux/auth/operations.js";
const RegistrationPage = lazy(() =>
  import("../pages/RegistrationPage/RegistrationPage.jsx")
);
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage.jsx"));
const ContactsPage = lazy(() =>
  import("../pages/ContactsPage/ContactsPage.jsx")
);
import { selectIsRefreshing } from "../redux/auth/selectors.js";

const toastStyles = {
  style: {
    padding: "16px 24px",
    borderRadius: "10px",
    fontSize: "20px",
    fontWeight: "500",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
    textAlign: "center",
  },
  success: {
    style: {
      background: "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)",
      color: "#065f46",
    },
    iconTheme: {
      primary: "#10b981",
      secondary: "#fff",
    },
  },
  error: {
    style: {
      background: "linear-gradient(135deg, #f85032 0%, #e73827 100%)",
      color: "#fff",
    },
    iconTheme: {
      primary: "#fff",
      secondary: "#f87171",
    },
  },
};

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <strong>Refreshing user...</strong>
  ) : (
    <>
      <Suspense fallback={<p>Loading, please, wait...</p>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegistrationPage />}
                />
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
      <Toaster
        toastOptions={toastStyles}
        containerStyle={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1000,
        }}
      />
    </>
  );
};

export default App;
