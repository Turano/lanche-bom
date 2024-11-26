import styled, { css } from "styled-components";
import { ToggleButtonProps } from ".";

// Estilização do botão selecionável
export const ButtonWrapper = styled.button.withConfig({
  shouldForwardProp: (prop) => !["isSelected", "borderRadius"].includes(prop)
})<ToggleButtonProps>`
  padding: 10px 20px;
  flex-grow: 1;
  font-size: ${({ theme }) => theme.font.sizes.medium};
  font-family: ${({ theme }) => theme.font.family.default};
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.primary : theme.colors.darkerGray};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.text};
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
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme, isSelected }) =>
      isSelected ? theme.colors.primary : theme.colors.darkerGray};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.primary};
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      font-weight: bold;
    `}
`;
