import styled from 'styled-components';

export const CardGroupContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.media.lteMedium} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const Break = styled.hr`
  @media ${({ theme }) => theme.media.lteMedium} {
    display: none;
  }
`;
