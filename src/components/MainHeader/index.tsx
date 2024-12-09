import { HamburgerMenu } from '../HamburgerMenu';
import {
  HeaderContainer,
  Logo,
  Modal,
  ModalContent,
  NavOption,
} from './styles';
import { SearchButton } from '../SearchButton';
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
      <HeaderContainer>
        <HamburgerMenu onClick={toggleModal} open={isModalOpen} />
        <Logo
          src={getLogo.data}
          alt="Logo do lanche bom: Uma tampinha de garrafa vermelha contendo o texto Lanche Bom e Pastelaria"
        />
        <SearchButton />
      </HeaderContainer>
      {isModalOpen && (
        <Modal isOpen={isModalOpen}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <NavOption
              onClick={() => {
                toggleModal();
                navigate('/');
              }}
            >
              <Typography size="large" color={'white'}>
                Cardápio
              </Typography>
            </NavOption>
            <NavOption
              onClick={() => {
                toggleModal();
                navigate('/historico');
              }}
            >
              <Typography size="large" color={'white'}>
                Meus pedidos
              </Typography>
            </NavOption>
            <NavOption onClick={() => alert('Página em desenvolvimento')}>
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
