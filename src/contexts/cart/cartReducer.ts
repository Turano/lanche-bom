export type Product = {
  id: number;
  obs: string;
  quantity: number;
};

export type CartState = {
  items: Product[];
  name: string;
  tel: string;
  cep?: string;
  rua?: string;
  numero?: string;
  complemento?: string;
  tipoEntrega: 'entrega' | 'retirada';
};

export type CartAction =
  | { type: 'ADD_TO_CART'; payload: Product }
  | { type: 'REMOVE_FROM_CART'; payload: number }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } }
  | { type: 'CLEAR_CART' }
  | {
      type: 'SET_INFO';
      payload: {
        name: string;
        tel: string;
        cep?: string;
        rua?: string;
        numero?: string;
        complemento?: string;
        tipoEntrega: 'entrega' | 'retirada';
      };
    };

export const cartReducer = (
  state: CartState,
  action: CartAction,
): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item,
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item,
        ),
      };
    case 'CLEAR_CART':
      return {
        ...state,
        name: '',
        tel: '',
        cep: '',
        complemento: '',
        numero: '',
        rua: '',
        items: [],
      };
    case 'SET_INFO':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
