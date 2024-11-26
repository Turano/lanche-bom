import { useState, ReactNode, useEffect, useCallback } from 'react';
import { AppThemeContext, AppThemeContextValues } from './AppThemeContext';
import { defaultTheme, invertedTheme } from '../../styles/theme';
import { ThemeProvider } from 'styled-components';

interface AppThemeProviderProps {
  children: ReactNode;
}

export const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
  const [appTheme, setAppTheme] = useState(defaultTheme);

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (!localTheme) return;
    const newTheme = JSON.parse(localTheme);
    setAppTheme(newTheme);
  }, []);

  const handleSetTheme: AppThemeContextValues['setTheme'] = useCallback(
    (mode = 'default') => {
      if (mode === 'default') {
        setAppTheme(defaultTheme);
        localStorage.setItem('theme', JSON.stringify(defaultTheme));
      } else {
        setAppTheme(invertedTheme);
        localStorage.setItem('theme', JSON.stringify(invertedTheme));
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
