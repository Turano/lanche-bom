import styled, { css } from 'styled-components';

export const Textarea = styled.textarea<{
  disabled?: boolean;
}>`
  ${({ theme, disabled }) => css`
    width: 100%;
    padding: 10px;
    font-size: ${theme.font.sizes.small};
    border: 1px solid ${theme.colors.secondaryBg};
    border-radius: ${theme.sizes.radius};
    resize: none;
    background-color: ${disabled ? theme.colors.gray : theme.colors.mainBg};
    color: ${disabled ? theme.colors.lightGray : theme.colors.text};

    &:focus {
      outline: none;
      border-color: ${theme.colors.primary};
    }
  `}
`;
