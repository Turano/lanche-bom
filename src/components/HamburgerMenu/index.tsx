import React from 'react';
import { MenuContainer, MenuBar } from './styles';

interface HamburgerMenuProps {
  onClick: () => void;
  open: boolean;
}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  onClick,
  open,
}) => {
  return (
    <MenuContainer onClick={onClick}>
      <MenuBar open={open} />
    </MenuContainer>
  );
};
