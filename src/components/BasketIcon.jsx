import { useCart } from "../hooks/CartContext";
import { FaBagShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const BasketIcon = () => {
  const { state } = useCart();
  console.log(Object.values(state.items));
  const arr = Object.values(state.items);
  let sumArr = null;
  if (arr.length > 0) {
    sumArr = arr.reduce((acc, item) => acc + item);
  }

  return (
    <>
      <Link to="/cart">
        <FaBagShopping />
      </Link>

      <span>{sumArr}</span>
    </>
  );
};
