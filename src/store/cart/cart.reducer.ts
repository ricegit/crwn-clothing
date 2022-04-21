import { AnyAction } from "redux";

import { setIsCartOpen, setCartItems } from "./cart.action";
import { CartItem } from "./cart.types";

export type CartState = {
  readonly cartItems: CartItem[];
  readonly isCartOpen: Boolean;
};

const INITIAL_STATE: CartState = {
  cartItems: [],
  isCartOpen: false,
};

export const cartReducer = (
  state = INITIAL_STATE,
  action: AnyAction
): CartState => {
  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    };
  }

  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }

  return state;
};
