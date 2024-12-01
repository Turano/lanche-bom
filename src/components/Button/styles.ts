import styled from 'styled-components';
import { ButtonProps } from '.';

// Estilização do botão com base nas propriedades
export const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) => !['isMiddle', 'borderRadius'].includes(prop),
})<ButtonProps>`
  background-color: ${(props) =>
    props.disabled
      ? '#d3d3d3' // Cinza claro para estado desabilitado
      : props.isMiddle
        ? '#f0f0f0' // Cinza para o meio
        : '#f4c242'}; /* Amarelo para bordas */
  color: ${(props) => (props.isMiddle ? 'black' : 'black')}; /* Cor do texto */
  border: 1px solid ${(props) => (props.disabled ? '#a0a0a0' : 'black')};
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
        ? '#d3d3d3' // Não altera no hover se estiver desabilitado
        : props.isMiddle
          ? '#e6e6e6'
          : '#ddb12e'}; /* Hover mais claro */
  }

  &:active {
    background-color: ${(props) =>
      props.disabled
        ? '#d3d3d3' // Não altera no active se estiver desabilitado
        : props.isMiddle
          ? '#dcdcdc'
          : '#c9941f'}; /* Cor ao pressionar */
  }
`;
