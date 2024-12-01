import styled from 'styled-components';

// Estilização do Modal
export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  height: 100%;
  text-align: center;
`;

export const Content = styled.div`
  max-width: 500px;
  width: 100%;
  height: 100%;
  position: relative;
`;
