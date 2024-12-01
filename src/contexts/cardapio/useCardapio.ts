import { useContext } from 'react';
import { CardapioContext, CardapioContextType } from './CardapioContext';

export const useCardapio = (): CardapioContextType => {
  const context = useContext(CardapioContext);

  if (!context) {
    throw new Error('useCardapio must be used within a CardapioProvider');
  }

  return context;
};
