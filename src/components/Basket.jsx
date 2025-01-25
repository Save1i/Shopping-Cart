// import { Link } from "react-router-dom";
import { useCart } from "../hooks/CartContext";
import { Navbar } from "./NavBar";
import { CardBasket } from "./CardBasket";
import { DefaultBasket } from "./DefaultBasket";

export const Basket = () => {
  const { state } = useCart();

  return (
    <div>
      <Navbar />
      {Object.entries(state.items).length !== 0 ? (
        <div>
          {Object.entries(state.items).map(([id, qty]) => (
            <CardBasket key={id} url={`https://api.escuelajs.co/api/v1/products/${id}`} qty={qty} />
          ))}
        </div>
      ) : (
        <DefaultBasket />
      )}
    </div>
  );
};
