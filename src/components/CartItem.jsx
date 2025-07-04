import { useState } from "react";
const CartItem = ({ item, removeFromcart, updateQuantityCart }) => {
  const [quantity, setQuantity] = useState(1);

  function handleQuantityInc(id) {
    if (quantity > 10) {
      return;
    }
    setQuantity((prev) => prev + 1);
    updateQuantityCart(id, "INC");
  }
  function handleQuantityDec(id) {
    if (quantity <= 1) {
      return;
    }
    setQuantity((prev) => prev - 1);
    updateQuantityCart(id, "DEC");
  }

  return (
    <>
      <div className="cartitem">
        <div>
          <img src={item.image} width="50px" height="50px" />
        </div>
        <div>{item.title}</div>

        <div className="quantity">
          <button
            className="btnplus"
            onClick={(e) => handleQuantityInc(item.id)}
          >
            +
          </button>
          <input value={quantity} type="number" min={1} step={1} max={5} />
          <button
            className="btnminus"
            onClick={(e) => handleQuantityDec(item.id)}
          >
            -
          </button>
        </div>
        <div>
          <button onClick={() => removeFromcart(item.id)}>Delete</button>
        </div>
        <div>{item.price}</div>
      </div>
    </>
  );
};

export default CartItem;
