import styled from 'styled-components';

export const Logo = styled.img`
  height: 4rem;
`;

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  top: 0;
  left: 0;
  box-sizing: border-box;
  height: fit-content;
`;
