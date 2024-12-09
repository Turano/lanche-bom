import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2rem;
  @media ${({ theme }) => theme.media.lteMedium} {
    margin: 0 20rem;
  }
  margin-bottom: 5rem;
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;
