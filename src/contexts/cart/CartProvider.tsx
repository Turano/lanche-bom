import { ReactNode, useEffect, useReducer } from 'react';
import { CartContext } from './CartContext';
import { cartReducer, CartState } from './cartReducer';

const initialState: CartState = {
  items: [],
  name: '',
  tel: '',
  tipoEntrega: 'entrega',
};

const loadState = (): CartState | undefined => {
  const storedState = localStorage.getItem('cartState');
  if (storedState) {
    return JSON.parse(storedState) as CartState;
  }
  return undefined;
};

const saveState = (state: CartState) => {
  localStorage.setItem('cartState', JSON.stringify(state));
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(
    cartReducer,
    loadState() || initialState,
  );

  useEffect(() => {
    saveState(state);
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
