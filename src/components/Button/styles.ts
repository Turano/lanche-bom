import styled, { css } from 'styled-components';

export const Button = styled.button<{
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
}>`
  ${({ theme, disabled, variant }) => css`
    padding: 10px 20px;
    font-size: ${theme.font.sizes.medium};
    border-radius: ${theme.sizes.radius};
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    background-color: ${variant === 'primary'
      ? theme.colors.primary
      : theme.colors.secondaryBg};
    color: ${theme.colors.white};
    border: none;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${!disabled &&
      (variant === 'primary'
        ? theme.colors.primaryHover
        : theme.colors.secondaryHover)};
    }
  `}
`;
