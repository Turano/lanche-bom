import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 110px;
  right: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2000;
`;

export const MainButton = styled.button`
  background-color: #8b0000;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

interface SubButtonProps {
  isOpen: boolean;
}

export const SubButton = styled(MainButton).withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen',
})<SubButtonProps>`
  background-color: #8b0000;
  width: 45px;
  height: 45px;
  margin: 5px 0;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(20px)')};
  transition: all 0.3s ease;
`;
