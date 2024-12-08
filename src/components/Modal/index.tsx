import React from 'react';
import { Content, Overlay } from './styles';

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <Content>{children}</Content>
    </Overlay>
  );
};
