import { createContext } from 'react';
import { Item } from '../../types';

export type CardapioContextType = {
  cardapioItems: Item[];
  getItemDetails: (id: string) => Item | undefined;
};

export const CardapioContext = createContext<CardapioContextType | undefined>(
  undefined,
);
