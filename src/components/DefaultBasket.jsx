import { Link } from "react-router-dom";

export const DefaultBasket = () => {
  return (
    <div>
      <h3>Your cart is empty! Click below to start shopping.</h3>
      <Link to="/" className="">
        SHOP NOW
      </Link>
    </div>
  );
};
