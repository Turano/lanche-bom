import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  name: 'default',
  colors: {
    primary: '#FFC100',
    primaryHover: '#FFD700',
    secondary: '#8E1504',
    secondaryHover: '#BA1A07',
    tertiary: '#BA8379',
    text: '#000000',
    white: '#FFFFFF',
    whiteHover: '#EEEEEE',
    darkerGray: '#AAAAAA',
    whiterGray: '#AAAAAA',
    mainBg: '#EDEDED',
    disabled: '#D3D3D3',
  },
  font: {
    family: {
      default: "'Roboto', sans-serif",
    },
    sizes: {
      xsmall: '1.4rem', // Pequeno
      small: '1.8rem', // Médio
      medium: '2.6rem', // Grande
      large: '3.2rem', // Maior
      huge: '5.6rem', // Muito grande
    },
  },
  media: {
    lteMedium: '(min-width: 50em)',
    lteSmall: '(min-width: 25em)',
  },
  spacings: {
    xsmall: '0.8rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
    huge: '5.6rem',
  },
  sizes: {
    max: '96rem',
    content: '80rem',
    radius: '0.4rem',
  },
};

export const invertedTheme: DefaultTheme = {
  name: 'inverted',
  colors: {
    primary: '#8E1504',
    primaryHover: '#BA1A07',
    secondary: '#EAB632',
    secondaryHover: '#FFC100',
    tertiary: '#8E8379',
    text: '#FFFFFF', // Inverte o texto para claro
    white: '#333333', // Fundo escuro
    whiteHover: '#555555', // Fundo escuro
    darkerGray: '#222222',
    whiterGray: '#444444',
    mainBg: '#121212',
    disabled: '#555555',
  },
  font: {
    family: {
      default: "'Roboto', sans-serif",
    },
    sizes: {
      xsmall: '1.4rem',
      small: '1.8rem',
      medium: '2.6rem',
      large: '3.2rem',
      huge: '5.6rem',
    },
  },
  media: {
    lteMedium: '(min-width: 50em)',
    lteSmall: '(min-width: 25em)',
  },
  spacings: {
    xsmall: '0.8rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
    huge: '5.6rem',
  },
  sizes: {
    max: '96rem',
    content: '80rem',
    radius: '0.4rem',
  },
};
