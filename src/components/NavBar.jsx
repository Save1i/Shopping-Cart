import { BasketIcon } from "./BasketIcon";

export const Navbar = () => {
  return (
    <div>
      <div>
        <ul>
          <li>shop</li>
          <li>abot us</li>
        </ul>
        <h1>LOGO</h1>
        <ul>
          <li>search</li>
          <BasketIcon url={"https://fakestoreapi.com/carts"} />
        </ul>
      </div>
    </div>
  );
};
