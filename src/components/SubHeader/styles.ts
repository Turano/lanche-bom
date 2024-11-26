import { IoArrowBack, IoClose } from 'react-icons/io5';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 50px;
  align-items: center;
  border-bottom: 1px solid black;
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  svg {
    width: 50%;
    height: 50%;
    color: ${({ theme }) => theme.colors.mainBg};
  }
`;

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
