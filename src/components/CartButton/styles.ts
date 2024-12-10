import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  position: fixed; /* Mantém a posição fixa */
  right: 20px; /* Define o canto inferior direito */
  bottom: 20px;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const CartCount = styled.span`
  position: absolute;
  bottom: 0; /* Ajuste fino para alinhar corretamente */
  left: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  font-size: 12px;
  font-weight: bold;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;
