import styled from "styled-components";

// Estilos
export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 2rem;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 60px;
  padding: 12px 16px;
  font-size: ${({ theme }) => theme.font.sizes.medium};
  font-family: ${({ theme }) => theme.font.family.default};
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.sizes.radius};
  outline: none;
  background: none;
  transition: all 0.3s ease-in-out;
  color: ${({ theme }) => theme.colors.text};

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: -8px;
    left: 12px;
    font-size: ${({ theme }) => theme.font.sizes.small};
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.white};
    padding: 0 4px;
  }
`;

export const StyledLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  font-size: ${({ theme }) => theme.font.sizes.medium};
  color: ${({ theme }) => theme.colors.darkerGray};
  transition: all 0.3s ease-in-out;
  pointer-events: none;
  background-color: transparent;
`;

