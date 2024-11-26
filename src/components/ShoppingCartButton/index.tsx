import { useState } from 'react';
import { ToggleButton, BottomComponent } from './styles';

const ShoppingCartButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleComponent = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <ToggleButton onClick={toggleComponent}>
        {isVisible ? 'Hide' : 'Show'} Bottom Component
      </ToggleButton>

      {isVisible && (
        <BottomComponent>
          <p>This is a toggleable component at the bottom!</p>
        </BottomComponent>
      )}
    </div>
  );
};

export default ShoppingCartButton;
