import React from "react";
import { Navbar } from "./components/NavBar"; // Импорт Navbar
import { Shop } from "./components/Shop"; // Импорт Shop
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Shop url={"https://api.escuelajs.co/api/v1/products"} />
      <Footer />
    </div>
  );
}
