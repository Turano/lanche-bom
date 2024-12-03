import styled from 'styled-components';

export const HistoryCard = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 14px;

  span {
    color: #333;
  }

  span:last-child {
    color: ${({ theme }) => theme.colors.primary || '#8b0000'}; // Cor do status
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  p {
    font-size: 14px;
    color: #555;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;

  span {
    font-weight: bold;
    color: #333;
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
  background-color: ${({ primary }) => (primary ? '#8b0000' : '#ccc')};
  color: ${({ primary }) => (primary ? '#fff' : '#333')};
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    opacity: 0.9;
  }
`;
