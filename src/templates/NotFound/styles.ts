import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.bgColor};
  color: ${({ theme }) => theme.colors.text};
`;

export const Title = styled.h1`
  margin-top: 5rem;
  font-size: ${({ theme }) => theme.font.sizes.huge};
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.large};
  margin-top: 1rem;
`;
