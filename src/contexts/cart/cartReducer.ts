import { SelectedItem } from '../../types';

export type CartState = {
  items: SelectedItem[];
  userId: string;
  nome: string;
  tel: string;
  rua?: string;
  bairro?: string;
  numero?: string;
  complemento?: string;
  tipoEntrega: 'entrega' | 'retirada';
};

export type CartAction =
  | { type: 'ADD_TO_CART'; payload: SelectedItem }
  | { type: 'REMOVE_FROM_CART'; payload: { id: string; obs: string } }
  | {
      type: 'UPDATE_QUANTITY';
      payload: { id: string; quantidade: number; obs: string };
    }
  | { type: 'CLEAR_CART' }
  | {
      type: 'SET_INFO';
      payload: {
        nome: string;
        tel: string;
        rua?: string;
        numero?: string;
        bairro?: string;
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
        (item) =>
          item.item === action.payload.item && item.obs === action.payload.obs,
      );
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.item === action.payload.item && item.obs === action.payload.obs
              ? {
                  ...item,
                  quantidade: item.quantidade + action.payload.quantidade,
                }
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
        items: state.items.filter(
          (item) =>
            item.item !== action.payload.id || item.obs !== action.payload.obs,
        ),
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map((item) =>
          item.item === action.payload.id && item.obs === action.payload.obs
            ? { ...item, quantidade: action.payload.quantidade }
            : item,
        ),
      };
    case 'CLEAR_CART':
      return {
        ...state,
        nome: '',
        tel: '',
        bairro: '',
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
