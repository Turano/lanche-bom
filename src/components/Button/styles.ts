import styled, { keyframes } from 'styled-components';
import { ButtonProps } from '.';

// Animação de rotação
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Estilo do Loader
export const Loader = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid transparent;
  border-top: 2px solid black; /* Cor do spinner */
  border-radius: 50%;
  animation: ${spin} 0.6s linear infinite;
`;

// Estilização do botão com base nas propriedades
export const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) =>
    !['isMiddle', 'borderRadius', 'bgColor'].includes(prop),
})<ButtonProps>`
  background-color: ${(props) =>
    props.disabled
      ? ({ theme }) => theme.colors.disabled // Cinza para desabilitado
      : props.bgColor === 'primary'
        ? ({ theme }) => theme.colors.primary // Cinza para o meio
        : ({ theme }) => theme.colors.white}; /* Amarelo para bordas */
  border: 1px solid ${(props) => (props.disabled ? '#a0a0a0' : ({ theme }) => theme.colors.text)};
  border-radius: ${(props) => {
    switch (props.borderRadius) {
      case 'left':
        return '30px 0 0 30px';
      case 'right':
        return '0 30px 30px 0';
      case 'both':
        return '30px';
      default:
        return '0';
    }
  }};
  padding: 10px 20px;
  font-size: 16px;
  flex: ${(props) => (props.isMiddle ? 1 : 'none')}; /* Meio ocupa o máximo possível */
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')}; /* Cursor para estado desabilitado */
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.disabled
        ? '' // Não altera no hover se estiver desabilitado
        : props.bgColor === 'primary'
          ? ({ theme }) => theme.colors.primaryHover
          : ({ theme }) => theme.colors.whiteHover};
  }
`;
