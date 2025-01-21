import "./App.css";
import { Navbar } from "./components/NavBar";

import { Shop } from "./components/Shop";

function App() {
  return (
    <>
      <Navbar />
      <Shop url={"https://fakestoreapi.com/products"} />;
    </>
  );
}

export default App;
