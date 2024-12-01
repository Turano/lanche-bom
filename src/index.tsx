import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GlobalStyles } from './styles/global-styles';
import { CartProvider, AppThemeProvider } from './contexts/index.tsx';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Cardapio } from './templates/Cardapio/index.tsx';
import { InfosPedido } from './templates/InfosPedido/index.tsx';
import { MainHeader } from './components/MainHeader/index.tsx';
import { AccessibilityButton } from './components/AccessibilityButton/index.tsx';
import { Confirmação } from './templates/Confirmação/index.tsx';
import { Histórico } from './templates/Histórico/index.tsx';
import { Cart } from './templates/Cart/index.tsx';
import { Headers, Wrapper } from './styles.ts';
import { SubHeader } from './components/SubHeader/index.tsx';
import { CardapioProvider } from './contexts/cardapio/CardapioProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppThemeProvider>
      <CartProvider>
        <CardapioProvider>
          <Router>
            <Headers>
              <MainHeader />
              <SubHeader />
            </Headers>
            <AccessibilityButton />
            <Wrapper>
              <Routes>
                <Route path="/" element={<Cardapio />} />
                <Route path="/carrinho" element={<Cart />} />
                <Route path="/pedido" element={<InfosPedido />} />
                <Route path="/confirmar" element={<Confirmação />} />
                <Route path="/historico" element={<Histórico />} />
              </Routes>
            </Wrapper>
          </Router>
          <GlobalStyles />
        </CardapioProvider>
      </CartProvider>
    </AppThemeProvider>
  </StrictMode>,
);
