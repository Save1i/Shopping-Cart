import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { router } from "./components/routes";
import { RouterProvider } from "react-router-dom";
import { CartProvider } from "./hooks/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);
