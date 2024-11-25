import React, { useCallback, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { AppThemeContext, AppThemeContextValues } from './AppThemeContext';

interface AppThemeProviderProps {
  children: React.ReactNode;
}

export const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
  const [appTheme, setAppTheme] = useState(theme);

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (!localTheme) return;
    const newTheme = JSON.parse(localTheme);
    setAppTheme(newTheme);
  }, []);

  const handleSetTheme: AppThemeContextValues['setTheme'] = useCallback(
    (mode = 'default') => {
      if (mode === 'default') {
        setAppTheme(theme);
        localStorage.setItem('theme', JSON.stringify(theme));
      } else {
        const newTheme = {
          ...theme,
          name: 'inverted',
          colors: {
            primary: '#FFFFFF',
            secondary: '#dc143c',
            tertiary: '#BA8379',
            darkText: '#F9f9f9',
            white: '#000000',
            mediumGray: '#f9f9f9',
            darkerGray: '#CCCCCC',
          },
        };
        setAppTheme(newTheme);
        localStorage.setItem('theme', JSON.stringify(newTheme));
      }
    },
    [],
  );

  return (
    <AppThemeContext.Provider
      value={{ theme: appTheme, setTheme: handleSetTheme }}
    >
      <ThemeProvider theme={appTheme}>{children}</ThemeProvider>
    </AppThemeContext.Provider>
  );
};
