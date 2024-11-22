import styled from 'styled-components';

// Estilização do Modal
export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  height: 100%;
  text-align: center;
`;

export const Content = styled.div`
  background: ${({ theme }) => theme.colors.mainBg || 'white'};
  padding: 20px;
  border-radius: 20px 20px 0 0;
  max-width: 500px;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;
