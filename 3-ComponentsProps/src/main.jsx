import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/LoginPage.jsx";
import RegisterPage from "./Pages/RegisterPage.jsx";
import ErrorPage from "./Pages/404.jsx";
import ProductsPage from "./Pages/ProductPage.jsx";
import CartPage from "./Pages/cartPage.jsx";
import DetailProductPage from "./Pages/detailProduct.jsx";
import { Provider } from "react-redux";
import store from "../redux/store";
import DarkModeContextProvider from "./context/darkMode.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/products/:id",
    element: <DetailProductPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider>
      <RouterProvider router={router} />
      </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>
);
