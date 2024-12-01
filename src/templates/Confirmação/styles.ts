import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  margin-bottom: 80px;
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

export const ButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%); /* Centraliza horizontalmente */
`;

