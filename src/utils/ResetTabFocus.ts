import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ResetTabFocus = () => {
  const location = useLocation();

  useEffect(() => {
    // Foca no primeiro elemento interativo (ou elemento específico)
    const firstFocusableElement = document.querySelector('[tabindex="0"]');
    if (firstFocusableElement) {
      (firstFocusableElement as HTMLElement).focus();
    }
  }, [location]);

  return null; // Este componente não renderiza nada
};
