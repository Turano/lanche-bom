import { createContext } from 'react';
import { CartState, CartAction } from './cartReducer';

export type CartContextValues = {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
};

export const CartContext = createContext<CartContextValues | undefined>(
  undefined,
);
