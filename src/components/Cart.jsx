import CartItem from "./CartItem";

const Cart = (props) => {
  return (
    <>
      {props?.cart?.map((item) => (
        <CartItem
          item={item}
          removeFromcart={props.removeFromcart}
          updateQuantityCart={props.updateQuantityCart}
        />
      ))}
      <div className="cart-total">
        <span>Total $</span> {props.totalPrice}
      </div>
    </>
  );
};

export default Cart;
