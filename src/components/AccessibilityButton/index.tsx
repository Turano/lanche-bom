import { useState } from 'react';
import { FaTimes, FaPlus, FaMinus } from 'react-icons/fa';
import { MainButton, SubButton, Wrapper } from './styles';
import { IoAccessibility } from 'react-icons/io5';
import { ToggleTheme } from '../ToggleTheme';
export const AccessibilityButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <MainButton onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <IoAccessibility size={24} />}
      </MainButton>
      <SubButton isOpen={isOpen}>
        <FaPlus size={20} />
      </SubButton>
      <SubButton isOpen={isOpen}>
        <FaMinus size={20} />
      </SubButton>
      <ToggleTheme isOpen={isOpen} />
    </Wrapper>
  );
};
