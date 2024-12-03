import { ReactNode, useEffect, useReducer } from 'react';
import { CartContext } from './CartContext';
import { cartReducer, CartState } from './cartReducer';

const initialState: CartState = {
  items: [],
  userId: '',
  name: '',
  tel: '',
  cep: '',
  rua: '',
  numero: '',
  complemento: '',
  tipoEntrega: 'entrega',
};

// Função para gerar um ID único
const generateUserId = (): string => {
  return crypto.randomUUID(); // Alternativa: usar uma função customizada ou biblioteca como 'uuid'
};

// Carrega o estado inicial do localStorage, gerando um `userId` se necessário
const loadState = (): CartState => {
  const storedState = localStorage.getItem('cartState');
  if (storedState) {
    const parsedState = JSON.parse(storedState) as CartState;

    // Garante que o userId exista no estado carregado
    if (!parsedState.userId) {
      parsedState.userId = generateUserId();
    }

    return parsedState;
  }

  // Caso não exista um estado salvo, inicializa com um userId gerado
  return { ...initialState, userId: generateUserId() };
};

// Salva o estado no localStorage
const saveState = (state: CartState) => {
  localStorage.setItem('cartState', JSON.stringify(state));
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, loadState());

  useEffect(() => {
    saveState(state);
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
