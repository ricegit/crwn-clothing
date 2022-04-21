import { CategoryItem } from "../categories/categories.types";
import { CART_ACTION_TYPES, CartItem } from "./cart.types";
import {
  createAction,
  ActionWithPayload,
  withMatcher,
} from "../../utils/reducer/reducer.utils";

const addCartItem = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
): CartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === existingCartItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (
  cartItems: CartItem[],
  itemToRemove: CartItem
): CartItem[] => {
  if (itemToRemove && itemToRemove.quantity === 1) {
    //remove product from array
    return cartItems.filter((cartItem) => {
      return cartItem.id !== itemToRemove.id;
    });
  } else {
    //decrement quantity by one and return array
    return cartItems.map((cartItem) =>
      cartItem.id === itemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};

export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>;

export type SetIsCartOpen = ActionWithPayload<
  CART_ACTION_TYPES.TOGGLE_OPEN_CART,
  boolean
>;

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItems =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

export const addItemToCart = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};

export const removeItemFromCart = (
  cartItems: CartItem[],
  cartItemToRemove: CartItem
) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return setCartItems(newCartItems);
};

export const setIsCartOpen = withMatcher(
  (boolean: boolean): SetIsCartOpen =>
    createAction(CART_ACTION_TYPES.TOGGLE_OPEN_CART, boolean)
);
