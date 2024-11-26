import styled from "styled-components";
import { ButtonProps } from ".";

// Estilização do botão com base nas propriedades
export const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) => !["isMiddle", "borderRadius"].includes(prop)
})<ButtonProps>`
  background-color: ${(props) => (props.isMiddle ? "#f0f0f0" : "#f4c242")}; /* Cinza para o meio, amarelo para bordas */
  color: ${(props) => (props.isMiddle ? "black" : "black")}; /* Cor do texto */
  border: 1px solid black;
  border-radius: ${(props) => {
    switch (props.borderRadius) {
      case "left":
        return "30px 0 0 30px";
      case "right":
        return "0 30px 30px 0";
      case "both":
        return "30px";
      default:
        return "0";
    }
  }};
  padding: 10px 20px;
  font-size: 16px;
  flex: ${(props) => (props.isMiddle ? 1 : "none")}; /* Meio ocupa o máximo possível */
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.isMiddle ? "#e6e6e6" : "#ddb12e"}; /* Hover mais claro */
  }

  &:active {
    background-color: ${(props) =>
      props.isMiddle ? "#dcdcdc" : "#c9941f"}; /* Cor ao pressionar */
  }
`;
