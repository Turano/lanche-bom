import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  name: 'default',
  colors: {
    primary: '#EAB632',
    secondary: '#8E1504',
    tertiary: '#BA8379',
    text: '#000000',
    white: '#FFFFFF',
    darkerGray: '#AAAAAA',
    mainBg: '#EDEDED',
  },
  font: {
    family: {
      default: "'Roboto', sans-serif",
    },
    sizes: {
      xsmall: '1rem', // Pequeno
      small: '1.8rem', // Médio
      medium: '2.6rem', // Grande
      large: '3.2rem', // Maior
      huge: '5.6rem', // Muito grande
    },
  },
  media: {
    lteMedium: '(min-width: 768px)',
    lteSmall: '(min-width: 360px)',
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
    secondary: '#EAB632',
    tertiary: '#8E8379',
    text: '#FFFFFF', // Inverte o texto para claro
    white: '#333333', // Fundo escuro
    darkerGray: '#222222',
    mainBg: '#121212',
  },
  font: {
    family: {
      default: "'Roboto', sans-serif",
    },
    sizes: {
      xsmall: '1rem',
      small: '1.8rem',
      medium: '2.6rem',
      large: '3.2rem',
      huge: '5.6rem',
    },
  },
  media: {
    lteMedium: '(min-width: 768px)',
    lteSmall: '(min-width: 360px)',
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
