import { createContext } from 'react';
import { DefaultTheme } from 'styled-components';

export interface AppThemeContextValues {
  theme: DefaultTheme;
  setTheme: (mode: 'default' | 'inverted') => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fontSize: any; // Especifica explicitamente o tipo como 'number'
  increaseFont: () => void;
  decreaseFont: () => void;
}

export const AppThemeContext = createContext<AppThemeContextValues | undefined>(
  undefined,
);
