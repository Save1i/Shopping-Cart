import React from "react";
import { Navbar } from "./components/NavBar"; // Импорт Navbar
import { Shop } from "./components/Shop"; // Импорт Shop

export default function App() {
  return (
    <div>
      <Navbar />
      <Shop url={"https://fakestoreapi.com/products"} />
    </div>
  );
}
