import { useCart } from "../hooks/CartContext";
import { FaBagShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const BasketIcon = () => {
  const { state } = useCart();
  console.log(state);

  return (
    <>
      <Link to="/cart">
        <FaBagShopping />
      </Link>

      <span>{state.items.length}</span>
    </>
  );
};
