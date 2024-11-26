import { createContext } from 'react';
import { DefaultTheme } from 'styled-components';

export type AppThemeContextValues = {
  theme: DefaultTheme;
  setTheme?: (mode: 'default' | 'inverted') => void;
};

export const AppThemeContext = createContext<AppThemeContextValues>({
  theme: {} as DefaultTheme,
});
