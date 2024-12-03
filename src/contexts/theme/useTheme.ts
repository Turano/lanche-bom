import { useContext } from 'react';
import { AppThemeContext } from './AppThemeContext';

export const useAppTheme = () => {
  const context = useContext(AppThemeContext);
  if (!context) {
    throw new Error('err');
  }
  return context;
};
