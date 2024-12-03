import { useContext, useEffect, useState } from 'react';
import { SubButton } from '../AccessibilityButton/styles';
import { FaAdjust } from 'react-icons/fa';
import { AppThemeContext } from '../../contexts';

interface ToggleThemeProps {
  isOpen: boolean;
}

export const ToggleTheme = ({ isOpen }: ToggleThemeProps) => {
  const { setTheme } = useContext(AppThemeContext) || {};
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (!localTheme) return;
    const newTheme = JSON.parse(localTheme);

    if (newTheme.name === 'inverted') {
      setChecked(true);
    }
  }, []);

  useEffect(() => {
    if (setTheme) {
      setTheme(checked ? 'inverted' : 'default');
    }
  }, [checked, setTheme]);

  const handleChange = () => {
    setChecked((s) => !s);
    if (setTheme) {
      setTheme(checked ? 'inverted' : 'default');
    }
  };

  return (
    <SubButton isOpen={isOpen} onClick={handleChange}>
      <FaAdjust size={20} />
    </SubButton>
  );
};
