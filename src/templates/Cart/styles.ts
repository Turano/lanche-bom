import styled from 'styled-components';

export const ButtonGroupContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

export const Break = styled.hr`
  @media ${({ theme }) => theme.media.lteMedium} {
    display: none;
  }
`;
