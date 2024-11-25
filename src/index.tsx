import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GlobalStyles } from './styles/global-styles';
import App from './App.tsx';
import { AppThemeProvider } from './contexts/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppThemeProvider>
      <App />
      <GlobalStyles />
    </AppThemeProvider>
  </StrictMode>,
);
