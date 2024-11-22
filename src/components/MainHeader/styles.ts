import styled from 'styled-components';

export const Logo = styled.img`
  width: auto;  // Ajuste o tamanho conforme necessário
  height: 30px;
`;

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #ffc100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  top: 0;
  left: 0;
  box-sizing: border-box;
  height: fit-content;
`;
