import { createContext } from 'react';
import { theme } from '../styles/theme';
import { DefaultTheme } from 'styled-components';

export type AppThemeContextValues = {
  theme: DefaultTheme;
  setTheme?: (mode: 'default' | 'inverted') => void;
};

export const AppThemeContext = createContext<AppThemeContextValues>({
  theme,
});
