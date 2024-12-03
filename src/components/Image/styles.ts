import styled, { css } from 'styled-components';

export const Image = styled.img<{
  borderRadius?: string;
  width?: string;
  heigth?: string;
}>`
  ${({ theme, borderRadius, width, heigth }) => css`
    height: ${heigth};
    width: ${width};
    border-radius: ${borderRadius || theme.sizes.radius};
    border: 2px solid black;
  `}
`;
