import React, { useState } from 'react';
import { MenuContainer, MenuBar } from './styles';

export const HamburgerMenu: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <MenuContainer onClick={toggleMenu}>
      <MenuBar open={open} />
    </MenuContainer>
  );
};
