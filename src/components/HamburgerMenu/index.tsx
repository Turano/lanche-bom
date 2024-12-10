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
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault(); // Evita scroll ao pressionar barra de espaço
      onClick(); // Chama o toggle
    }
  };

  return (
    <MenuContainer onClick={onClick}>
      <MenuBar
        open={open}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        role="button"
        aria-pressed={open}
      />
    </MenuContainer>
  );
};
