import styled, { css, DefaultTheme } from 'styled-components';
import { TypographyProps } from '.';

const textSize = {
  xsmall: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
  `,
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
  `,
};

const textTransform = (uppercase: boolean) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

const textAlignment = (align: TypographyProps['align']) => css`
  text-align: ${align};
`;

const textWeight = (weight: TypographyProps['weight']) => css`
  font-weight: ${weight};
`;

export const Text = styled.p.withConfig({
  shouldForwardProp: (prop) =>
    ![
      'colorDark',
      'size',
      'uppercase',
      'weight',
      'align',
      'limitLines',
    ].includes(prop),
})<TypographyProps>`
  ${({
    theme,
    colorDark,
    size = 'medium',
    uppercase = false,
    weight,
    align,
    limitLines,
    overflow,
  }) => css`
    color: ${colorDark ? theme.colors.text : theme.colors.white};
    ${textSize[size](theme)};
    ${textTransform(uppercase)};
    ${textWeight(weight)};
    ${textAlignment(align)};
    ${
      limitLines === 'none'
        ? ''
        : css`
      display: -webkit-box;
      -webkit-line-clamp: ${limitLines};
      -webkit-box-orient: vertical;
    `
    }
      ${
        overflow === 'ellipsis'
          ? css`
      overflow: hidden;
      text-overflow: ellipsis;
    `
          : ''
      };
    line-height: 1.5;
  `}
`;
