import styled from 'styled-components';

export const Logo = styled.img`
  height: 4rem;
`;

export const HeaderContainer = styled.header`
  z-index: 100000;
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

export const Modal = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen',
})<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 5; /* Modal abaixo do MainHeader */
`;

export const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.colors.bgColor};
  padding: 32px;
  border-radius: ${({ theme }) => theme.sizes.radius};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const NavOption = styled.a`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.font.sizes.large};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
