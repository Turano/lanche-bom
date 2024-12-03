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
    if (localTheme) {
      const newTheme = JSON.parse(localTheme);
      setAppTheme(newTheme);
    }
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

  // Funções para aumentar ou diminuir o tamanho da fonte no theme
  const adjustFontSize = (operation: 'increase' | 'decrease') => {
    const factor = operation === 'increase' ? 1.2 : 0.8;

    // Função que vai aplicar o aumento ou diminuição em todos os tamanhos de fontes
    const adjustThemeFontSizes = (theme: typeof defaultTheme) => {
      const newFontSizes = Object.keys(theme.font.sizes).reduce(
        (acc: { [key: string]: string }, size) => {
          acc[size] = `${parseFloat(theme.font.sizes[size]) * factor}rem`;
          return acc;
        },
        {},
      );

      return {
        ...theme,
        font: {
          ...theme.font,
          sizes: newFontSizes,
        },
      };
    };

    const newTheme = adjustThemeFontSizes(appTheme);
    setAppTheme(newTheme);
    localStorage.setItem('theme', JSON.stringify(newTheme));
  };

  return (
    <AppThemeContext.Provider
      value={{
        theme: appTheme,
        setTheme: handleSetTheme,
        fontSize: parseFloat(appTheme.font.sizes.default),
        increaseFont: () => adjustFontSize('increase'),
        decreaseFont: () => adjustFontSize('decrease'),
      }}
    >
      <ThemeProvider theme={appTheme}>{children}</ThemeProvider>
    </AppThemeContext.Provider>
  );
};
