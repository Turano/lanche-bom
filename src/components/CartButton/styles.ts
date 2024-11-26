import styled from 'styled-components';

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
  position: fixed;
  right: 20px;
  bottom: 20px;

  &:hover {
    transform: scale(1.1);
  }
`;
