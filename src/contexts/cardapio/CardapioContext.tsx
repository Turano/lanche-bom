import { createContext } from 'react';
import { Categoria, Item } from '../../types';

export type CardapioContextType = {
  cardapioItems: Item[];
  getItemDetails: (id: string) => Item | undefined;
  categorias: Categoria[];
};

export const CardapioContext = createContext<CardapioContextType | undefined>(
  undefined,
);
