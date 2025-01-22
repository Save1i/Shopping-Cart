import { Link } from "react-router-dom";
import { useCart } from "../hooks/CartContext";
import { CardShop } from "./CardShop";
import { Navbar } from "./NavBar";

export const Basket = () => {
  const { state } = useCart();
  return (
    <div>
      <Navbar />
      <div>
        {state.items.map((id, index) => (
          <CardShop url={`https://fakestoreapi.com/products/${id}`} />
        ))}
      </div>

      <Link to="/"> go to shop</Link>
    </div>
  );
};
