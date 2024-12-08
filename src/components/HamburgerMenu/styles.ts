import styled from 'styled-components';

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 35px;
  height: fit-content;
  cursor: pointer;
  position: relative;
`;

export const MenuBar = styled.div<{ open: boolean }>`
  width: 100%;
  height: 4px;
  background-color: ${({ open }) => (open ? 'transparent' : ({ theme }) => theme.colors.text)};
  transition: all 0.3s ease-in-out;
  position: relative;

  &:before,
  &:after {
    content: '';
    width: 100%;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.text};
    position: absolute;
    transition: all 0.3s ease-in-out;
  }

  &:before {
    top: ${({ open }) => (open ? '0' : '-10px')};
    transform: ${({ open }) => (open ? 'rotate(45deg)' : 'none')};
  }

  &:after {
    top: ${({ open }) => (open ? '0' : '10px')};
    transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'none')};
  }
`;
