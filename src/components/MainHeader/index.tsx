import { HamburgerMenu } from '../HamburgerMenu';
import {
  HeaderContainer,
  Logo,
  Modal,
  ModalContent,
  NavOption,
} from './styles';
import { usePocket } from '../../contexts/api/usePocket';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from '../Typography';

export const MainHeader = () => {
  const navigate = useNavigate();

  const { getLogo } = usePocket();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen((prev) => !prev);

  return (
    <>
      <div tabIndex={0} />
      <HeaderContainer>
        <HamburgerMenu onClick={toggleModal} open={isModalOpen} />
        <Logo
          src={getLogo.data}
          alt="Logo do lanche bom: Uma tampinha de garrafa vermelha contendo o texto Lanche Bom e Pastelaria"
        />
        <div style={{ width: '35px' }} />
      </HeaderContainer>
      {isModalOpen && (
        <Modal isOpen={isModalOpen}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <NavOption
              tabIndex={0}
              onClick={() => {
                toggleModal();
                navigate('/');
              }}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault(); // Evita scroll ao pressionar barra de espaço
                  toggleModal(); // Chama o toggle
                  navigate('/');
                }
              }}
            >
              <Typography size="large" color={'white'}>
                Cardápio
              </Typography>
            </NavOption>
            <NavOption
              tabIndex={0}
              onClick={() => {
                toggleModal();
                navigate('/historico');
              }}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault(); // Evita scroll ao pressionar barra de espaço
                  toggleModal(); // Chama o toggle
                  navigate('/historico');
                }
              }}
            >
              <Typography size="large" color={'white'}>
                Meus pedidos
              </Typography>
            </NavOption>
            <NavOption
              tabIndex={0}
              onClick={() => alert('Página em desenvolvimento')}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault(); // Evita scroll ao pressionar barra de espaço
                  alert('Página em desenvolvimento');
                }
              }}
            >
              <Typography size="large" color={'white'}>
                Sobre nós
              </Typography>
            </NavOption>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};
