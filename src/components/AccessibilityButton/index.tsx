import { useState } from 'react';
import { FaTimes, FaPlus, FaMinus } from 'react-icons/fa';
import { MainButton, SubButton, Wrapper } from './styles';
import { IoAccessibility } from 'react-icons/io5';
import { ToggleTheme } from '../ToggleTheme';
import { useAppTheme } from '../../contexts/theme/useTheme';

export const AccessibilityButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { increaseFont, decreaseFont } = useAppTheme();

  return (
    <Wrapper>
      <MainButton onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <IoAccessibility size={24} />}
      </MainButton>
      <SubButton isOpen={isOpen} onClick={increaseFont}>
        <FaPlus size={20} />
      </SubButton>
      <SubButton isOpen={isOpen} onClick={decreaseFont}>
        <FaMinus size={20} />
      </SubButton>
      <ToggleTheme isOpen={isOpen} />
    </Wrapper>
  );
};
