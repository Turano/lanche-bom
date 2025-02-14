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
      'color',
      'size',
      'uppercase',
      'weight',
      'align',
      'limitLines',
      'fontSize',
    ].includes(prop),
})<TypographyProps>`
  ${({
    theme,
    color,
    size = 'medium',
    uppercase = false,
    weight,
    align,
    limitLines,
    overflow,
    fontSize,
  }) => css`
    font-size: ${fontSize ? `${fontSize}px` : 'inherit'};
    color: ${color !== '' ? color : theme.colors.text};
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
