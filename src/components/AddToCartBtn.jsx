export const AddToCartBtn = ({ id }) => {
  const addprod = (id) => {
    console.log(id);
  };

  return <button onClick={() => addprod({ id })}>ADD TO CART</button>;
};
