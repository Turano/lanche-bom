import { useContext } from 'react';
import { PocketContext, PocketContextProps } from './PocketContext';

// Hook customizado para consumir o contexto de pedido
export const usePocket = (): PocketContextProps => {
  const context = useContext(PocketContext);
  if (!context) {
    throw new Error('usePocket must be used within a PocketProvider');
  }
  return context;
};
