import { createContext } from 'react';

export type CardapioItem = {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
};

export type CardapioContextType = {
  cardapioItems: CardapioItem[];
  getItemDetails: (id: number) => CardapioItem | undefined;
};

export const CardapioContext = createContext<CardapioContextType | undefined>(
  undefined,
);
