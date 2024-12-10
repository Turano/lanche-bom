import ReactInputMask from 'react-input-mask';
import styled from 'styled-components';

export const ErrorMessage = styled.span`
  position: absolute;
  display: block;
  margin-top: 4px;
  font-size: ${({ theme }) => theme.font.sizes.small};
  color: ${({ theme }) => theme.colors.error || 'red'};
`;

export const StyledInputMask = styled(ReactInputMask).withConfig({
  shouldForwardProp: (prop) => prop !== 'error',
})<{ error?: boolean }>`
  border: 1px solid ${(props) => (props.error ? 'red' : ({ theme }) => theme.colors.text)};
  width: 100%;
  height: 6rem;
  padding: 12px 16px;
  font-size: ${({ theme }) => theme.font.sizes.medium};
  font-family: ${({ theme }) => theme.font.family.default};
  border-radius: ${({ theme }) => theme.sizes.radius};
  outline: none;
  background: none;
  transition: all 0.3s ease-in-out;
  color: ${({ theme }) => theme.colors.text};

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: -10px;
    left: 12px;
    font-size: ${({ theme }) => theme.font.sizes.small};
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.bgColor};
    padding: 0 4px;
  }
  background-color: ${({ theme }) => theme.colors.bgColor};

`;

export const StyledLabel = styled.label`
  position: absolute;
  top: 3rem;
  left: 16px;
  transform: translateY(-50%);
  font-size: ${({ theme }) => theme.font.sizes.medium};
  color: ${({ theme }) => theme.colors.whiterGray};
  transition: all 0.3s ease-in-out;
  pointer-events: none;
  background-color: ${({ theme }) => theme.colors.bgColor};
  padding: 0 4px;

  ${StyledInputMask}:focus + &,
  ${StyledInputMask}:not(:placeholder-shown) + & {
    top: -10px;
    left: 12px;
    font-size: ${({ theme }) => theme.font.sizes.small};
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
