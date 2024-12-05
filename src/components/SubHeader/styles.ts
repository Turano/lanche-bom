import { IoArrowBack, IoClose } from 'react-icons/io5';
import styled from 'styled-components';

export const StyledCloseIcon = styled(IoClose)`
  width: 50px;
  height: 50px;
  display: block; /* Garante que não haverá espaço indesejado ao redor do ícone */
`;

export const StyledBackIcon = styled(IoArrowBack)`
  padding-left: 10px;
  width: 40px;
  height: 40px;
  display: block; /* Garante que não haverá espaço indesejado ao redor do ícone */
`;

export const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const Button = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  border-right: 1px solid ${({ theme }) => theme.colors.text};

  div {
    height: 100%;
    display: flex;
    align-items: center;

    svg {
      height: 80%;
      width: 100%;
      color: ${({ theme }) => theme.colors.text};
      transition: color 0.3s ease; /* Transição suave */
    }
  }

  &:hover div svg {
    color: ${({ theme }) => theme.colors.secondary}; /* Cor no hover */
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 5rem;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.text};
`;
