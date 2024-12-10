import { useState } from 'react';
import { FaTimes, FaPlus, FaMinus } from 'react-icons/fa';
import { MainButton, SubButton, Wrapper } from './styles';
import { IoAccessibility } from 'react-icons/io5';
import { ToggleTheme } from '../ToggleTheme';
import { useAppTheme } from '../../contexts/theme/useTheme';

export const AccessibilityButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [sizeChange, setSizeChange] = useState(0);

  const { increaseFont, decreaseFont } = useAppTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const onIncreaseFont = () => {
    if (sizeChange >= 2) return;
    setSizeChange(sizeChange + 1);
    increaseFont();
  };

  const onDecreaseFont = () => {
    if (sizeChange <= -2) return;
    setSizeChange(sizeChange - 1);
    decreaseFont();
  };

  return (
    <Wrapper>
      <MainButton onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <IoAccessibility size={24} />}
      </MainButton>
      <SubButton isOpen={isOpen} onClick={onIncreaseFont}>
        <FaPlus size={20} />
      </SubButton>
      <SubButton isOpen={isOpen} onClick={onDecreaseFont}>
        <FaMinus size={20} />
      </SubButton>
      <ToggleTheme isOpen={isOpen} />
    </Wrapper>
  );
};
