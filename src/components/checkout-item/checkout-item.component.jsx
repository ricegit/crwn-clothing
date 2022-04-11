import { useDispatch, useSelector } from "react-redux";

import {
  addItemToCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Value,
  Arrow,
  RemoveButton,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { quantity, price, name, imageUrl } = cartItem;

  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const incrementQuantity = () => dispatch(addItemToCart(cartItems, cartItem));

  const decrementQuantity = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  const clearCartItem = () =>
    dispatch(removeItemFromCart(cartItems, { ...cartItem, quantity: 1 }));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={decrementQuantity}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={incrementQuantity}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>${price}</BaseSpan>
      <RemoveButton onClick={clearCartItem}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
