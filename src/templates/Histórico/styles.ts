import styled, { keyframes } from 'styled-components';

export const HistoryCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  @media ${({ theme }) => theme.media.lteMedium} {
    width: 48%;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 14px;

  span {
    color: ${({ theme }) => theme.colors.text}; // Cor do texto
  }

  span:last-child {
    color: ${({ theme }) => theme.colors.secondary || '#8b0000'}; // Cor do status
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;

  span {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.text};
  }

  div {
    display: flex;
    gap: 8px;
  }
`;

interface ButtonProps {
  primary?: boolean;
}

export const HistButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'primary',
})<ButtonProps>`
  background-color: ${({ primary, theme }) => (primary ? theme.colors.secondary : '#ccc')};
  color: ${({ primary, theme }) => (primary ? theme.colors.white : '#333')};
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    opacity: 0.9;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: ${({ theme }) => theme.colors.mainBg};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ModalHeader = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  color: #333;
`;

export const ModalBody = styled.div`
  font-size: 1rem;
  color: #555;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

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
