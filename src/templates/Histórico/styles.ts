import styled from 'styled-components';

export const HistoryCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
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

export const Button = styled.button<ButtonProps>`
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
