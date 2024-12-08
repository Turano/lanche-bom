import styled, { css } from 'styled-components';

export const Image = styled.img<{
  borderRadius?: string;
  width?: string;
  heigth?: string;
  border?: string;
}>`
  ${({ theme, borderRadius, width, heigth, border }) => css`
    height: ${heigth};
    width: ${width};
    border-radius: ${borderRadius || theme.sizes.radius};
    border: ${border} solid ${({ theme }) => theme.colors.text};
  `}
`;
