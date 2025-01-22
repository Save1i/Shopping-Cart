import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Basket } from "./Basket";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cart",
    element: <Basket />,
  },
]);
