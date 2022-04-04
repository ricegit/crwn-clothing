import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { quantity, price, name, imageUrl } = cartItem;

  const { removeItemFromCart, addItemToCart } = useContext(CartContext);

  const incrementQuantity = () => addItemToCart(cartItem);

  const decrementQuantity = () => removeItemFromCart(cartItem);

  const clearCartItem = () => removeItemFromCart({ ...cartItem, quantity: 1 });

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decrementQuantity}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={incrementQuantity}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={clearCartItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
